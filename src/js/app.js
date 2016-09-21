;
"use strict";

var mcbuilder = angular.module( "mcbuilder", [] );

mcbuilder.config(function(toolServiceProvider) {
    toolServiceProvider.setUrl("data/tools.json");
});
