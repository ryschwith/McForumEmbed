;

mcbuilder.service( "toolService", function( $rootScope, $http ) {
    var current = {};
    var tools = [];

    $http.get("data/tools.json").then(function(data, status) {
        tools = data.data;
        $rootScope.$broadcast("tool:load.all", tools);
    });

    this.getCurrentTool = function() {
        return current;
    };

    this.getTool = function(name) {
        for(var index in tools) {
            if(!tools.hasOwnProperty(index)) continue;

            if(tools[index].name === name) {
                return tools[index];
            }
        }

        return {};
    };

    this.getAllTools = function() {
        return tools;
    };

    this.setTool = function(name) {
        current = this.getTool(name);
        $rootScope.$broadcast("tool:selected", current);
    };

    return this;
});


