(function (app) {
    'use strict';
    angular
        .module('imageApp')
        .directive('topBar', topBar);

    function topBar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/ImageAppScripts/layout/topBar.html'
        }
    }

})();