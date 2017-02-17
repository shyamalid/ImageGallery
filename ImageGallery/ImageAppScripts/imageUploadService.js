(function (app) {
    'use strict';

    app.factory('imageUploadService', fileUploadService);

    fileUploadService.$inject = ['$rootScope', '$http', '$timeout', '$upload'];

    function imageUploadService($rootScope, $http, $timeout, $upload) {

        $rootScope.upload = [];

        var service = {
            //uploadImage: uploadImage
        }

      //
        return service;
    }

})();