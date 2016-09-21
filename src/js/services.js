;

mcbuilder.provider( "toolService", function() {
    var url = "",
        current = {},
        tools = [];

    this.setUrl = function(u) {
        url = u;
    };

    this.$get = function( $rootScope, $http ) {
        return {
            getCurrentTool: function() {
                return current;
            },
            getTool: function( name ) {
                for(var index in tools) {
                    if(!tools.hasOwnProperty(index)) continue;

                    if(tools[index].name === name) {
                        return tools[index];
                    }
                }

                return {};
            },
            getAllTools: function() {
                return tools;
            },
            retrieveToolData: function() {
                $http.get(url).then(function(data, status) {
                    tools = data.data;
                    $rootScope.$broadcast("tool:load.all", tools);
                });
            },
            setTool: function( name ) {
                current = this.getTool(name);
                $rootScope.$broadcast("tool:selected", current);
            }
        }
    };
}).config(function(toolServiceProvider) {
        toolServiceProvider.setUrl("data/tools.json");
        toolServiceProvider.retrieveToolData();
    });

/*mcbuilder.service( "toolService", function( $rootScope, $http ) {
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
});*/


