(function() {
    'use strict';

    angular.module('app')

        .controller('patientController', [
            '$scope', 'Parse', '$log', '$state', 'PatientFactory',
            function($scope, Parse, $log, $state, PatientFactory) {

                var $patientCtrl = this;

                $patientCtrl.currentUser = Parse.User.current();

                $patientCtrl.logout = function() {
                    Parse.User.logOut();
                    $state.go('app.login');
                    location.reload();
                };

                var postQuery = new Parse.Query('patient');
                postQuery.find({
                    success: function (data) {
                        $patientCtrl.patients = data;
                        console.log('data',data)
                    }
                })
            }
        ]);
})();
