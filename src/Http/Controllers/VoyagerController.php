<?php

namespace Voyager\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Voyager\Admin\Facades\Bread as BreadFacade;

class VoyagerController extends Controller
{
    private $mime_extensions = [
        'js'    => 'text/javascript',
        'css'   => 'text/css',
        'woff'  => 'font/woff',
        'woff2' => 'font/woff2',
        'ttf'   => 'font/ttf',
    ];

    public function assets(Request $request)
    {
        $path = str_replace('/', DIRECTORY_SEPARATOR, Str::start(urldecode($request->path), '/'));
        $path = realpath(dirname(__DIR__, 3).'/resources/assets/dist').$path;

        if (realpath($path) != $path) {
            abort(404);
        }

        if (File::exists($path)) {
            $extension = Str::afterLast($path, '.');
            $mime = $this->mime_extensions[$extension] ?? File::mimeType($path);

            $response = response(File::get($path), 200, ['Content-Type' => $mime]);
            $response->setSharedMaxAge(31536000);
            $response->setMaxAge(31536000);
            $response->setExpires(new \DateTime('+1 year'));

            return $response;
        }

        abort(404);
    }

    // Search all BREADS
    public function globalSearch(Request $request)
    {
        $q = $request->get('query');
        $breads = BreadFacade::getBreads();
        $results = collect([]);

        BreadFacade::getBreads()->each(function ($bread) use ($q, &$results) {
            if ($bread->global_search_field !== '') {
                $bread_results = $bread->getModel()->where($bread->global_search_field, 'LIKE', '%'.$q.'%')->get();
                if (count($bread_results) > 0) {
                    $results[$bread->table] = [
                        'count'     => count($bread_results),
                        'results'   => $bread_results->take(3)->mapWithKeys(function ($result) use ($bread) {
                            return [$result->getKey() => $result->{$bread->global_search_field}];
                        }),
                    ];
                }
            }
        });

        return $results;
    }
}
