app.factory('githubServices', function($http){
    var baseUrl = 'https://api.github.com';
    var _findUser = function(user, cb){
       return $http.get(baseUrl+'/users/'+user).then(function(response){
            cb(response.status, response.data);
        }).catch(function(response){
            cb(response.status, response.data);
        });
    };
    var _findUserRepos = function(user, page, limit, cb){
        return $http.get(baseUrl+'/users/'+user+'/repos?page='+page+'&per_page='+limit).then(function(response){
                cb(response.status, response.data);
            }).catch(function(response){
                cb(response.status, response.data);
            });
    };
    return{
        findUser: _findUser,
        findUserRepos: _findUserRepos
    };
});