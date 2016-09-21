;

mcbuilder.provider( "toolService", function() {
    var url = "",
        current = {},
        tools = [];

    this.setUrl = function(u) {
        url = u;
    };

    this.$get = function( $rootScope, $http ) {
        function _retrieveToolData() {
            $http.get(url).then(function(data, status) {
                tools = data.data;
                $rootScope.$broadcast("tool:load.all", tools);
            });
        }
        _retrieveToolData();

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
            retrieveToolData: _retrieveToolData,
            setTool: function( name ) {
                current = this.getTool(name);
                $rootScope.$broadcast("tool:selected", current);
            }
        }
    };
});
