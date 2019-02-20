'use strict';

angular.module('app')
    .controller('loginController', ['Parse', '$state', '$parse', function(Parse, $state, $parse) {
        var $loginCtrl = this;
        $loginCtrl.error = "";

        $loginCtrl.currentUser = Parse.User.current();
        if($loginCtrl.currentUser){
            $state.go('app.accueil');
        }
        console.log('$loginCtrl.currentUser', $loginCtrl.currentUser);
        $loginCtrl.logIn = function(username, password) {
            Parse.User.logIn(username, password, {
                success: function(user) {
                    console.log('Utilisateur connecté : ', user);
                    $state.go('app.accueil');
                },
                error: function(user, error) {
                    switch (error.code) {
                        case 101:
                            $loginCtrl.error = "Email/Mot de passe invalide";
                            break;
                    }
                }
            });
        };

    }]);
