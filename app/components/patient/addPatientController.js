(function() {
    'use strict';

    angular.module('app')

        .controller('addPatientController', [
            '$scope', 'Parse', '$log', '$state', 'PatientFactory',
            function($scope, Parse, $log, $state, PatientFactory) {

                var $addPatientCtrl = this;

                $addPatientCtrl.currentUser = Parse.User.current();



            }
        ]);
})();
