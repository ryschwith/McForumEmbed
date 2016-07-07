;

mcbuilder.controller( "ToolboxController", function( $scope, toolService ) {
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
        alert(e.currentTarget);
    };
});

