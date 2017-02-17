(function (imageApp) {
    'use strict';

    angular
        .module('imageApp')
        .directive('sideBar', sideBar);

    function sideBar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/ImageAppScripts/layout/sideBar.html'
        }
    }

})();
