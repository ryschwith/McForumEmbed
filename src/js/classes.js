;

window.mcs = window.mcs || {};

mcs.Point = function() {
    this._x = parseInt(arguments[0], 10) || null;
    this._y = parseInt(arguments[1], 10) || null;
    this._z = parseInt(arguments[2], 10) || null;

};

mcs.Point.prototype.x = function() {
    if(arguments.length > 0) {
        this._x = arguments[0];
    }

    return this._x;
};

mcs.Point.prototype.y = function() {
    if(arguments.length > 0) {
        this._y = arguments[0];
    }

    return this._y;
};

mcs.Point.prototype.z = function() {
    if(arguments.length > 0) {
        this._z = arguments[0];
    }

    return this._z;
};

mcs.GridPlane = function() {
    this._origin = new mcs.Point(0,0);
    this._items = [];
};

mcs.GridPlane.prototype.addItem = function(coords, el) {
    this._items.push({ Coordinates: coords, Element: el});
};

mcs.GridPlane.prototype.setOrigin = function(x,y) {
    if(isNaN(x) || isNaN(y)) return;

    this._origin.x(x);
    this._origin.y(y);
};
