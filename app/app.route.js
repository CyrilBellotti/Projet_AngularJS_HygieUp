(function() {
    'use strict';

    angular.module('home', [
        'ui.router'
    ])

        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider.state({
                'name': 'app',
                'url': '/',
                template: '<div ui-view/>',
                abstract: true
            });

            //Homepage
            $stateProvider.state({
                'name': 'app.home',
                'url': '',
                controller: ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
                    if (!Parse.User.current()) {
                        $state.go('app.login');
                    }
                    else {
                        $state.go('app.accueil');
                    }
                }]
            });

            $stateProvider.state({
                'name': 'app.accueil',
                'url': 'accueil/?:status',
                templateUrl: 'app/components/home/home.html',
                controller: 'homeController',
                controllerAs: '$homeCtrl',
                onEnter: ['$state', 'Parse', function ($state, Parse) {
                    if (!Parse.User.current()) {
                        $state.go('app.login');
                    }
                }]
            });

            $stateProvider.state({
                name:'app.login',
                url: 'login/',
                templateUrl: 'app/components/login/login.html',
                controller: 'loginController',
                controllerAs: '$loginCtrl'
            });

            $stateProvider.state({
                name:'app.patient',
                url: 'patient',
                templateUrl: 'app/components/patient/patient.html',
                controller: 'patientController',
                controllerAs: '$patientCtrl'
            });

            $stateProvider.state({
                name:'app.addPatient',
                url: 'addPatient',
                templateUrl: 'app/components/patient/addPatient.html',
                controller: 'addPatientController',
                controllerAs: '$addPatientCtrl'
            });

        });
})();
