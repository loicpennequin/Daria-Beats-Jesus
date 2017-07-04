

app.directive('validFile', function validFile($parse) {

return {
    restrict : 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$validators.validFile = function() {

            element.on('change', function () {

                var value = element.val(),
                    model = $parse(attrs.ngModel),
                    modelSetter = model.assign;

                scope.uploadedFileType = null;

                if(!value) {

                    modelSetter(scope, '');

                } else {

                    var ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();

                    if(attrs.validFile.indexOf(ext) !== -1) {

                        scope.uploadedFileType = ext;
                        modelSetter(scope, element[0].files[0]);

                    } else {

                        scope.uploadedFileType = 'other';
                        modelSetter(scope, '');
                    }
                }
            });
        };
    }
  };
});
