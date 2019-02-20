/**
 * Created by cbellotti on 31/10/2017.
 */
(function () {
    'use strict';

    angular.module('app')
        .config(['ParseProvider', function (ParseProvider) {
            ParseProvider.initialize('AWRnraTtMB0nNfvL7VNveggz20XQmndy3uIV84KZ', 'obACgeMZOGLHmt8FsTAZnpWG2KUaXIpjj2tjDrPM');
            ParseProvider.serverURL = 'https://parseapi.back4app.com';
        }]);
})();

