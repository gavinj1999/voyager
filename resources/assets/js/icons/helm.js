const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 686 686"
    }, [
        _createVNode("path", { d: "m347 685.2h-9c-14.1-3.7-18.1-14.3-18.5-27.3-0.1-2.7-0.3-5.4 0.3-8 2.5-11.5 4.9-23.1 8.1-34.4 2.3-8.2 1.4-12.5-5-18.1-1.8-1.6-3.3-4.6-3.5-7-0.5-5.8-0.3-11.7-0.1-17.5 0.1-2.8-1-3.6-3.7-3.9-31.9-3.7-61.7-13.7-89.2-30.2-9.5-5.7-18.5-12.3-28.4-18.9-4.5 4.7-8.8 9.7-13.8 14.2-1.9 1.7-5.2 2.9-7.8 2.8-8.4-0.5-12.1 1.8-16.3 9.3-5.8 10.3-11.9 20.4-18.7 30-4.7 6.7-11.1 11.9-19.2 14.7-8.7 3-15.7-0.1-21.7-6.1-6.1-6.1-9.4-13.4-5.7-21.7 2.6-5.6 6.3-11 10.6-15.5 9.9-10.2 22.1-17 34.9-22.9 6.5-3 9.4-8 8.1-14.8-0.7-3.8 0.3-6.4 3-8.9 4.9-4.5 9.7-9.1 14.7-13.8-28.7-35.8-45.2-75.7-50.2-120.9-7.1 0-13.9 0.3-20.6-0.2-2.6-0.2-5.7-1.7-7.4-3.6-5.4-6.1-10-7.6-17.7-4.8-13.3 5-27.1 8.4-41.4 8.3-13.4 0-24.8-3.8-28.6-18.7v-9c6.5-15 14.9-20.4 32.2-18.3 12.8 1.6 25.4 4.9 37.9 8.3 7.6 2 12.5 1.5 17.2-4.8 2.2-3 4.8-4.2 8.4-4.1 6.6 0.2 13.2 0.1 20.1 0.1 2.5-22.4 7.8-43.4 16.1-63.7 8.4-20.4 19.8-39.1 33.8-56.8-5.1-5-10.2-9.6-14.7-14.7-1.6-1.8-2.7-5-2.5-7.4 0.7-8.2-1.7-12.1-8.7-16.1-10.4-5.9-20.7-12.1-30.4-18.9-6.5-4.6-11.7-10.8-14.6-18.6-3.1-8.6-0.6-15.7 5.5-21.9s13.2-9.5 22.1-6.4c8 2.8 14.4 8 19.1 14.7 7 10.1 13.2 20.7 19.4 31.3 3.4 5.9 8.1 9.1 14.6 7.8 4.2-0.8 7 0.5 9.6 3.4 4.3 4.8 8.8 9.4 13.3 14.1 18.1-14.4 36.7-25.6 57-34 20.4-8.5 41.6-13.6 63.8-16.2 0-7.2-0.3-14.1 0.2-20.8 0.2-2.4 1.6-5.4 3.5-7 6.4-5.6 7.9-10.1 4.9-18.1-5-13.2-8.2-26.8-8.3-40.9-0.1-16.7 4.5-23.2 19.5-28.9h8c12.7 3.3 17.7 12.4 18.6 24.6 0.2 2.3 0.2 4.7 0.1 7-0.5 13.4-3.7 26.3-8.4 38.8-2.7 7.2-1.6 12.3 4.6 16.7 3.3 2.4 4.3 5.1 4.2 8.9-0.2 6.6-0.1 13.2-0.1 19.8 45.4 5.1 85.2 21.7 120 49.5 0.7-0.3 0.9-0.3 1-0.4 4.7-4.7 9.3-9.6 14.3-13.9 1.9-1.6 5-2.6 7.5-2.4 8 0.7 12.4-1.6 16.1-8.8 3.9-7.5 7.5-15.4 12.6-22 5.8-7.5 12.6-14.7 20.2-20.4 9-6.7 18.6-4.9 26.7 2.9 8.3 8 9.8 17.3 4.1 27.1-1.6 2.7-3.5 5.3-5.6 7.6-10.4 11.4-23.4 19.1-37.2 25.6-7.1 3.3-9.6 7.2-8.6 15 0.5 4.1-0.7 7-3.6 9.7-4.7 4.3-9.3 8.9-13.7 13.3 32.4 45.7 38.3 59.7 49.4 117.6 0.5 2.7 1.8 3.1 4.1 3.1 5.8-0.1 11.7-0.3 17.5 0.1 2.3 0.2 5.1 1.5 6.6 3.3 6 7 9.8 7.5 18.9 5.1 12.3-3.3 24.8-6.4 37.4-7.9 16.8-1.9 25 3.3 31.5 17.3v11c-4.2 14-15.2 17.5-27.9 17.7-14.3 0.2-28-3.3-41.4-8.1-8.5-3.1-12.6-1.8-18.4 5-1.5 1.7-4.3 3.1-6.6 3.3-5.6 0.5-11.3 0.3-17 0.1-3.5-0.2-4.5 1.2-4.8 4.5-2.9 25.5-9.8 50-21.8 72.7-7.9 15-17.3 29.1-26.7 44.7 3.8 3.6 8.6 8.3 13.5 12.7 2.6 2.3 3.5 4.9 3.1 8.4-1 8.8 1.4 11.8 9.2 16.2 10 5.6 19.8 11.5 29.2 18.1 6.8 4.8 12.4 11.2 15.2 19.4 3 8.5 0.3 15.7-5.8 21.8-6 6-13 9.2-21.7 6.2-8-2.7-14.5-8-19.2-14.7-6.9-9.8-13.1-20-18.9-30.4-4-7.1-7.9-9.5-16-9-2.6 0.2-5.9-0.9-7.9-2.7-5.1-4.4-9.6-9.6-14-14-1 0.2-1.2 0.2-1.3 0.3-34.4 27.1-73.2 43.7-116.8 48.9-1.1 0.1-2.7 2.2-2.8 3.5-0.3 6 0.2 12-0.3 18-0.2 2.3-1.5 5.1-3.3 6.6-6.8 5.9-8.1 10-5 18.4 5 13.7 8.4 27.7 8.1 42.4-0.7 12.5-4.9 23.1-19.1 26.6zm164-329.4c-1.7-0.2-2.7-0.3-3.7-0.3-4.8 0.1-9.5 0.6-13.1-4-1-1.2-4.5-1.5-6.4-0.7-16 6.1-31.8 6.1-47.8-0.1-1.8-0.7-5.4-0.3-6.4 0.9-3.3 4.4-7.7 3.8-12.1 4-1.4 0.1-3.3 1.4-3.8 2.6-3.8 9.7-7.4 19.4-11.3 30-0.3-0.3 0.3 0.5 1 1.1 3.3 3.1 6.5 6 5.7 11.4-0.2 1.6 2 4.5 3.7 5.3 15.9 7 27.1 18.3 34.3 34.1 0.9 2 4.4 4 6.7 4 3.7 0 6 1.3 8.1 3.8 1.4 1.7 2.6 3.5 4.2 5.7 24.4-29.1 37.8-61 40.9-97.8zm0-25.8c-3.2-37.1-16.5-69-40.1-97-1.4 1.3-2.5 2.3-3.6 3.3-2.9 2.8-5.3 6.2-10.5 5.3-1.7-0.3-5 2.3-5.9 4.3-7 15.4-18 26.5-33.5 33.5-2.1 0.9-4.4 4.3-4.3 6.4 0.1 4.1-1.5 6.6-4.2 9-1.3 1.2-2.4 2.5-3.7 3.8 0.5 0 1-0.1 1.5-0.1 3.5 9.4 7.3 18.8 10.5 28.3 0.9 2.7 2.2 3.3 4.7 3.2 4.3-0.2 8.4-0.3 11.7 3.8 1.1 1.4 5.1 1.5 7.3 0.7 15.5-5.7 30.9-5.7 46.4 0 2.3 0.8 6.3 0.1 8-1.5 2.6-2.5 5.2-3.2 8.4-3 2.2 0.1 4.3 0 7.3 0zm-213.8 76.5c0.2-0.2-0.6 0.4-1.2 1.1-3.1 3.3-6 6.4-11.4 5.8-1.7-0.2-4.6 2.3-5.5 4.2-6.9 15.5-18.1 26.5-33.4 33.5-2.1 1-4.6 4.4-4.4 6.4 0.4 4.2-1.5 6.6-4.2 8.9-1.5 1.3-3.2 2.4-5.2 3.8 29 24.4 61 37.8 97.6 40.8 0.2-1.6 0.3-2.4 0.3-3.2 0-4.9-0.6-9.8 4.1-13.6 1.2-1 1.4-4.6 0.7-6.4-6.1-15.8-6-31.5-0.1-47.4 0.7-2 0.4-5.8-0.9-6.8-4.2-3.2-4-7.4-3.8-11.7 0.1-2.5-0.5-3.8-3.2-4.7-9.5-3.1-18.9-6.7-29.4-10.7zm-123-51c3.2 37.2 16.5 69.1 40.1 97.1 1.3-1.2 2.4-2.1 3.3-3 3-3.2 5.7-6.1 10.9-5.6 1.7 0.2 4.7-2.1 5.6-4 7.1-15.6 18.2-26.8 33.8-33.8 2-0.9 4-4.3 4.1-6.6 0.1-3.6 1.1-6.1 3.8-8.1 1.6-1.2 3.3-2.3 3.7-2.6-4.1-10.1-8.1-18.5-10.9-27.3-1.4-4.4-2.5-6.8-7.5-6-3.4 0.6-6.2-0.4-8.9-3.2-1.4-1.5-5.2-2.3-7.1-1.6-16 6.2-31.8 6.1-47.8 0.1-2-0.8-5.8-0.1-7.1 1.4-2.8 3-5.7 3.6-9.3 3.3-2-0.2-3.9-0.1-6.7-0.1zm0-25.8c1.9 0.2 3 0.4 4.1 0.4 4.6-0.1 9.1-0.4 12.6 4 1 1.3 4.9 1.4 6.9 0.7 15.7-6 31.2-5.9 46.9 0 2 0.8 5.8 0.6 6.8-0.7 3.4-4.2 7.6-3.9 12.1-4 1.4 0 3.5-1.3 4-2.5 3.8-9.7 7.3-19.5 10.9-29.2 0.8-0.3 0.4-1-0.2-1.5-3.4-3.4-7.2-6.2-6.4-12.1 0.2-1.6-2.4-4.4-4.4-5.3-15.3-6.9-26.2-17.9-33.2-33.1-1-2.2-4.5-4.6-6.8-4.5-3.8 0.1-6.1-1.3-8-3.8-1.4-1.8-2.5-3.9-3.9-6.3-24.9 29.3-38.2 61.1-41.4 97.9zm58.6-115.2c1.2 1.3 2 2.3 3 3.2 3 3 6.4 5.5 5.6 10.9-0.3 1.8 2.6 5.1 4.8 6.1 15.1 6.9 25.9 17.8 32.8 32.8 1 2.1 4.2 4.7 6.2 4.6 4.6-0.3 7.1 1.9 9.8 4.7 1.1 1.2 2.3 2.2 3.5 3.3 0-0.5-0.1-1-0.1-1.4 9.1-3.5 18.1-7.3 27.4-10.3 3.2-1.1 4.3-2.2 4.1-5.4-0.2-4-0.3-7.7 3.5-10.8 1.5-1.2 1.8-5.4 1-7.7-5.6-15.6-5.7-30.9 0.1-46.4 0.8-2.2 0.3-6.3-1.2-7.7-3.2-2.9-3.6-6.1-3.4-9.8 0.1-1.9 0-3.8 0-6.2-37.2 3.2-69.1 16.6-97.1 40.1zm155 190.4c-0.3 0.7-0.6 1.4-0.9 2.1-9.4 3.5-18.8 7.2-28.4 10.4-2.8 1-3 2.5-2.9 4.8 0.2 4.2 0.1 8-3.7 11.2-1.5 1.3-1.8 5.4-1 7.7 5.7 15.5 5.6 30.9 0 46.4-0.8 2.3-0.1 6.4 1.5 8 2.7 2.7 3.5 5.4 3.3 8.9-0.1 2.1 0 4.2 0 6.8 37-3.3 68.9-16.6 96.8-40.1-1-1.1-1.6-1.9-2.3-2.5-3.5-3.3-7-6.3-6.4-12.1 0.2-1.6-2.4-4.5-4.3-5.4-15.5-7-26.5-18.1-33.5-33.5-1-2.1-4.5-3.2-7-4.4-2.3-1.2-5.1-1.7-7.2-3.2-1.7-1.2-2.7-3.4-4-5.1zm65.7-189.5c-29.2-24.5-61-37.8-97.5-41-0.2 1.6-0.4 2.7-0.4 3.9 0 4.6 0.5 9.1-4.1 12.6-1.3 1-1.6 4.8-0.9 6.8 5.9 15.8 5.9 31.5 0 47.3-0.7 2-0.4 5.8 0.9 6.8 4.5 3.3 3.9 7.6 4.1 12.1 0.1 1.3 1 3.4 2.1 3.8 9.8 3.8 19.7 7.4 30.3 11.2-0.3 0.3 0.3-0.2 0.9-0.8 3.2-3.3 6.1-6.8 11.7-6.1 1.6 0.2 4.5-2.3 5.4-4.2 6.9-15.2 17.8-26.3 33.1-33.2 2.2-1 4.7-4.4 4.7-6.7 0-4 1.4-6.7 4.3-8.9 1.6-1.2 3.3-2.2 5.4-3.6zm-150.9 127.1c-0.1 22.1 17.6 40.1 39.8 40.2 22 0.1 40.1-17.7 40.4-39.8 0.3-21.8-18-40.1-40-40.2-22.2 0-40 17.6-40.2 39.8zm-153.8 75.8c0 6.2 5.2 11.4 11.4 11.4 6.1 0 11.4-5.3 11.5-11.4 0-6.1-5.3-11.4-11.4-11.4-6.3 0-11.5 5.2-11.5 11.4zm280.6-257.7c0.1-6.3-4.9-11.5-11.1-11.6s-11.4 5-11.5 11.2c-0.1 6.3 5 11.6 11.2 11.7 6.1 0.1 11.4-5.1 11.4-11.3zm-151 0c0.1-6.3-4.9-11.5-11.2-11.6-6.2-0.1-11.4 5-11.5 11.2-0.1 6.3 5 11.6 11.1 11.7s11.5-5.1 11.6-11.3zm257.9 257.7c0-6.4-5.1-11.5-11.4-11.4s-11.3 5.3-11.2 11.6c0.1 6.1 5.1 11.1 11.2 11.2 6.3 0.1 11.4-5 11.4-11.4zm-376.1-139.7c6.2 0 11.4-5.3 11.4-11.4 0-6.2-5.3-11.3-11.5-11.3s-11.3 5.2-11.3 11.4c0 6.3 5.2 11.3 11.4 11.3zm257.9 257.9c6.4 0 11.4-5 11.3-11.4 0-6.2-4.8-11.2-11-11.3-6.3-0.2-11.5 4.9-11.6 11.2s5 11.5 11.3 11.5zm-139.7-11.5c-0.1-6.3-5.4-11.4-11.6-11.2-6.3 0.2-11.2 5.4-11 11.8 0.2 6.1 5.2 11 11.3 11 6.3-0.1 11.4-5.3 11.3-11.6zm257.9-257.6c0.1-6.4-4.9-11.5-11.2-11.5s-11.4 5.1-11.4 11.5c0 6.2 4.9 11.1 11 11.3 6.4 0 11.5-4.9 11.6-11.3z" })
    ]))
}