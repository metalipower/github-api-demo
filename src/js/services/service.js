app.factory('services', function(){
    var _name;
    var _setName = function(name){
        _name = name;
    };
    var _getName = function(){
        return _name;
    }
    return {
        setName: _setName,
        getName: _getName
    }
});