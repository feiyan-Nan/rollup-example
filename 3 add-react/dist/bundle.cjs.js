(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bundleName11 = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    function App(_a) {
        var name = _a.name;
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Hello World ",
                name)));
    }

    exports.Ed = App;

}));
