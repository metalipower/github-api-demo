app.factory('annotationServices', function($http){
    var _getAnnotation = function(userId){
        return localStorage.getItem(userId);
    };
    var _setAnnotation = function(userId, annotation){
        localStorage.setItem(userId, annotation);
    };
    return{
        getAnnotation: _getAnnotation,
        setAnnotation: _setAnnotation
    };
});