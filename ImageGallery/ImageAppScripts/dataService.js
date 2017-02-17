(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .factory('dataService', dataService);

    dataService.$inject = ['$http', '$location', 'alertService', '$rootScope'];

    function dataService($http, $location, alertService, $rootScope) {
        var service = {
            get: get,
            post: post,
            deleteOp: deleteOp,
            editOp: editOp
        };

        function get(url, config, success, failure) {
            return $http.get(url, config)
                    .then(function (result) {
                        success(result);
                    }, function (error) {
                        if (failure != null) {
                            failure(error);
                        }
                    });
        }

        function post(url, data, success, failure) {
            return $http.post(url, data)
                    .then(function (result) {
                        success(result);
                    }, function (error) {
                        if (failure != null) {
                            failure(error);
                        }
                    });

        }

        function deleteOp(url, config, success, failure) {
            return $http.delete(url, config)
                    .then(function (result) {
                        success(result);
                    }, function (error) {
                        if (failure != null) {
                            failure(error);
                        }
                    });
        }
        function editOp(url, config, success, failure) {
            return $http.put(url, config)
                    .then(function (result) {
                        success(result);
                    }, function (error) {
                        if (failure != null) {
                            failure(error);
                        }
                    });
        }
        return service;
    }

})(angular.module('common.core'));