;

mcbuilder
    .controller( "ToolboxController", function( $scope, toolService ) {
        $scope.isScrolling = false;
        $scope.translateOffset = 0;
        $scope.previousMouseX = 0;
        $scope.tools = toolService.getAllTools();

        $scope.setScrollingState = function(state) {
            $scope.isScrolling = !!state;
        };

        $scope.registerMouseMove = function(e) {
            var currentMouseX = e.pageX;

            if( $scope.isScrolling ) {
                var newOffset = $scope.translateOffset + currentMouseX - $scope.previousMouseX;

                if( newOffset > 0 ) newOffset = 0;
                if( newOffset < document.body.scrollWidth - e.currentTarget.scrollWidth ) newOffset = document.body.scrollWidth - e.currentTarget.scrollWidth;

                $scope.offsetElement( e.currentTarget, newOffset );
            }

            $scope.previousMouseX = currentMouseX;
        }

        $scope.offsetElement = function(el, offset) {
            el.style.transform = "translateX(" + offset + "px)";
            $scope.translateOffset = offset;
        };

        $scope.selectTool = function(e) {
            toolService.setTool(e.srcElement.title);
        };
    })
    .controller( "CurrentToolIndicatorController", function( $scope, toolService ) {
        $scope.$on("tool:selected", function(e, data) {
            $scope.tool = data;
        })
    })
    .controller( "BuilderStageController", function( $scope, toolService ) {
        $scope.useTool = function(e) {
            var coords = { x: e.pageX, y: e.pageY };

            $scope.addBlock(e.currentTarget, coords, toolService.getCurrentTool());
        };

        $scope.addBlock = function(el, coords, tool) {
            var gridSize = parseInt(window.getComputedStyle(el, null).getPropertyValue("font-size"), 10);
                block = document.createElement("div");

            //if(typeof gridSize === "undefined" || typeof el === "undefined" || el === null) return;

            block.className = "builder-block";
            block.style.backgroundColor = tool.color;
            block.style.left = (Math.floor(coords.x / gridSize) * gridSize) + "px";
            block.style.top = (Math.floor(coords.y / gridSize) * gridSize) + "px";
            block.title = tool.name;

            el.appendChild(block);
        };
    });


