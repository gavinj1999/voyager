<?php

namespace Voyager\Admin\Traits\Bread;

trait Browsable
{
    public function loadSoftDeletesQuery($bread, $layout, $query)
    {
        $this->uses_soft_deletes = $bread->usesSoftDeletes();
        if (!isset($layout->options->soft_deletes) || !$layout->options->soft_deletes) {
            $this->uses_soft_deletes = false;
        }
        if ($this->uses_soft_deletes) {
            if ($softdeleted == 'show') {
                $query = $query->withTrashed();
            } elseif ($softdeleted == 'only') {
                $query = $query->onlyTrashed();
            }
        }

        return $query;
    }

    public function globalSearchQuery($global, $layout, $locale, $query)
    {
        if (!empty($global)) {
            $query->where(function ($query) use ($global, $layout, $locale) {
                $layout->searchableFormfields()->each(function ($formfield) use (&$query, $global, $locale) {
                    if ($formfield->translatable ?? false) {
                        $query->orWhere(DB::raw('lower('.$formfield->column->column.'->"$.'.$locale.'")'), 'LIKE', '%'.strtolower($global).'%');
                    } elseif ($formfield->column->type == 'column') {
                        $query->orWhere(DB::raw('lower('.$formfield->column->column.')'), 'LIKE', '%'.strtolower($global).'%');
                    }
                });
            });
        }

        return $query;
    }

    public function columnSearchQuery($filters, $layout, $query)
    {
        foreach (array_filter($filters) as $column => $filter) {
            $formfield = $layout->getFormfieldByColumn($column);
            if (!$formfield) {
                continue;
            }
            if ($formfield->translatable ?? false) {
                $query->where(DB::raw('lower('.$column.'->"$.'.$locale.'")'), 'LIKE', '%'.strtolower($filter).'%');
            } elseif ($formfield->column->type == 'column') {
                $query->where(DB::raw('lower('.$column.')'), 'LIKE', '%'.strtolower($filter).'%');
            }
        }

        return $query;
    }

    public function orderQuery($layout, $direction, $order, $query)
    {
        if (!empty($direction) && !empty($order)) {
            if ($layout->getFormfieldByColumn($order)->translatable ?? false) {
                $query = $query->orderBy(DB::raw('lower('.$order.'->"$.'.$locale.'")'), $direction);
            } elseif ($layout->getFormfieldByColumn($order)->column->type == 'column') {
                $query = $query->orderBy($order, $direction);
            }
        }

        return $query;
    }

    public function transformResults($layout, $translatable, $query)
    {
        return $query->transform(function ($item) use ($translatable, $layout) {
            if ($translatable) {
                $item->dontTranslate();
            }
            // Add soft-deleted property
            $item->is_soft_deleted = false;
            if ($this->uses_soft_deletes && !empty($item->deleted_at)) {
                $item->is_soft_deleted = $item->trashed();
            }

            $layout->formfields->each(function ($formfield) use (&$item) {
                if ($formfield->column->type == 'relationship') {
                    $relationship = Str::before($formfield->column->column, '.');
                    $property = Str::after($formfield->column->column, '.');
                    if (Str::contains($property, 'pivot.')) {
                        // Pivot data
                        $property = Str::after($property, 'pivot.');
                        $pivot = [];
                        $item->{$relationship}->each(function ($related) use (&$pivot, $formfield, $property) {
                            if (isset($related->pivot) && isset($related->pivot->{$property})) {
                                $pivot[] = $formfield->browse($related->pivot->{$property});
                            }
                        });
                        $item->{$formfield->column->column} = $pivot;
                    } elseif ($item->{$relationship} instanceof Collection) {
                        // X-Many relationship
                        $item->{$formfield->column->column} = $item->{$relationship}->pluck($property)->transform(function ($value) use ($formfield) {
                            return $formfield->browse($value);
                        });
                    } elseif (!empty($item->{$relationship})) {
                        // Normal property/X-One relationship
                        $item->{$formfield->column->column} = $formfield->browse($item->{$relationship}->{$property});
                    }
                } else {
                    $item->{$formfield->column->column} = $formfield->browse($item->{$formfield->column->column});
                }
            });

            return $item;
        });
    }
}