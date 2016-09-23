;
window.mcs = window.mcs || {};

/**
 * Represents a point in an arbitrary, three-dimensional space
 */
mcs.Point = function() {
    this.x(arguments[0]);
    this.y(arguments[1]);
    this.z(arguments[2]);
};

mcs.Point.prototype.validateNumber = function(input) {
    var num = parseInt(input, 10);
    if(num === null || typeof num === "undefined" || isNaN(num)) {
        return null;
    }
    return num;
};

mcs.Point.prototype.x = function() {
    if(arguments.length > 0) {
        this._x = this.validateNumber(arguments[0]);
    }

    return this._x;
};

mcs.Point.prototype.y = function() {
    if(arguments.length > 0) {
        this._y = this.validateNumber(arguments[0]);
    }

    return this._y;
};

mcs.Point.prototype.z = function() {
    if(arguments.length > 0) {
        this._z = this.validateNumber(arguments[0]);
    }

    return this._z;
};

/**
 * Represents a two-dimensional plane
 */
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
