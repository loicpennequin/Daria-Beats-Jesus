app.directive("adminNavItem", function($interval) {
    return {
        scope: true,
        restrict: "A",
        link: function(scope, elem, attrs) {

            $(elem).click(function() {
                $(this).addClass("active").siblings().removeClass("active")
            });
        }
    }
});
