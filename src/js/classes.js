(function(mcs) {
    mcs.Point = (function() {
        var x, y;

        if(arguments.length >= 2) {
            x = arguments[0];
            y = arguments[1];
        }

        return {
            x: x,
            y: y
        };
    })();

    mcs.GridPlane = (new function() {
        var origin = new mcs.Point(),
            items = [];

        var addItem = function(coords, el) {
            this.items.push({ Coordinates: coords, Element: el});
        };

        var setOrigin = function(x,y) {
            if(isNaN(x) || isNaN(y)) return;

            this.origin.x = x;
            this.origin.y = y;
        };

        return {
            setOrigin: setOrigin
        }
    })();
})(window.mcs = window.mcs || {});