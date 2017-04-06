app.component('userAnnotation', {
    templateUrl: 'components-html/user-annotation.html',
    bindings: {
        userId: '='
    },
    controller: function(annotationServices){
        var ctrl = this;
        ctrl.$onInit = function(){
            var userAnnotation = annotationServices.getAnnotation(ctrl.userId);
            if(!userAnnotation){
                return;
            }
            ctrl.userAnnotation = userAnnotation;
        };
        ctrl.updateAnnotation = function(){
            annotationServices.setAnnotation(ctrl.userId, ctrl.userAnnotation);
        };
    }
});