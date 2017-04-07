app.factory('authService', function(lock, authManager){

    var _login = function() {
        lock.show();
    };

    var _registerAuthenticationListener = function() {
        lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();
        });

        lock.on('authorization_error', function (err) {
            console.log(err);
        });
    };

    var _logout = function () {
        localStorage.removeItem('id_token');
        authManager.unauthenticate();
    };

    return {
        login: _login,
        logout: _logout,
        registerAuthenticationListener: _registerAuthenticationListener
    }
});