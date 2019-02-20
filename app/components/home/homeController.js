(function() {
    'use strict';

    angular.module('app')

        .controller('homeController', [
            '$scope', 'Parse', '$log', '$state', 'PatientFactory',
            function($scope, Parse, $log, $state, PatientFactory) {

                var $homeCtrl = this;

                $homeCtrl.currentUser = Parse.User.current();

                $homeCtrl.logout = function() {
                    Parse.User.logOut();
                    $state.go('app.login');
                    location.reload();
                };

                $homeCtrl.addPatient = function(){
                    $state.go('app.addPatient')
                };

                $homeCtrl.goPatient = function() {
                    $state.go('app.patient');
                };

                var loadAllPatient = function (){
                    var Patient = Parse.Object.extend("patient");
                    var PatientQuery = new Parse.Query(Patient);
                    PatientQuery.find({
                        success: function (data) {
                            $homeCtrl.patients = data;
                          /*  $homeCtrl.patients.forEach(function(patient){
                                if(patient.medecin){
                                    if(patient.medecin.id == $homeCtrl.currentUser.id){
                                        $homeCtrl.patientsByMedecin = patient;
                                        console.log('$homeCtrl.patientsByMedecin ', $homeCtrl.patientsByMedecin )
                                    }
                                }
                            });*/
                            $log.log('patient', data);
                        },
                        echec: function (data, error) {
                            $log.log('patient', error);
                        }
                    });
                    /*PatientFactory.getAll().then(function (data) {
                        $homeCtrl.data = data;
                        console.log('getAll', data);
                    });*/
                };
                loadAllPatient();

                var Pquery = new Parse.Query('User');
                Pquery.find({
                    success: function (data) {
                        console.log('data', data);
                    },
                    echec: function (data, error) {
                        console.log(error);
                    }
                });

                var postQuery = new Parse.Query('patient');
                postQuery.find({
                    success: function (data) {
                        $homeCtrl.patientsByMedecin = [];
                        $homeCtrl.patients = data;
                        $homeCtrl.patients.forEach(function(patient){
                            if(patient.medecin){
                                if(patient.medecin.id == $homeCtrl.currentUser.id){
                                    $homeCtrl.patientsByMedecin.push(patient);
                                    console.log('$homeCtrl.patientsByMedecin ', $homeCtrl.patientsByMedecin )
                                }
                            }
                        });                    },
                    echec: function (data, error) {
                    }
                })
            }
        ]);
})();
