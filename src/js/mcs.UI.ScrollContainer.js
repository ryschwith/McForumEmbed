;
"use strict";

(function(mcs) {
	mcs.UI = mcs.UI || {};

	mcs.UI.ScrollContainerManager = (function() {

		var initManager = function(root) {
			if(root.isArray()) {
				for(var i = 0, l = root.length; i < l; i++) {
					initManager(root[i]);
				}
			} else {

			}
		};

		var setScrollContainer = function(node) {

		};

		return {
			init: initManager,
			set: setScrollContainer
		}
	})();
})(window.mcs = window.mcs || {});