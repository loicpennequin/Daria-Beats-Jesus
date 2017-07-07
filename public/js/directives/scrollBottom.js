app.directive("scrollBottom", function() {
    return {
        scope: true,
        restrict: "A",
        link: function(scope, elem, attrs) {

            $(elem).click(function() {
              let newScrollTop = $(".view").scrollTop() + 400;
              $('.view').animate({scrollTop: newScrollTop},'slow');
            });
        }
    }
});
