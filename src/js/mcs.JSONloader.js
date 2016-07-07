;'use strict'

var mcs = mcs || {};
mcs.config = mcs.config || {};

mcs.JSONloader = (function(conf) {
    var xhr = new XMLHttpRequest(),
        defaults = {
            callback: null,
            loadAsync: true,
            method: "GET"
        },
        settings;

    for(var key in defaults) {
        settings[ key ] = conf[ key ] || defaults[ key ];
    }
    delete defaults;

    var load = function(filePath) {
        if(typeof settings.callback != "undefined") {
            xhr.onreadystatechange = function() {

            };
        }
        xhr.load(settings.method, filePath, settings.loadAsync);
    };

    return {
        load: load
    }
})(mcs, mcs.config.JSONloader);
