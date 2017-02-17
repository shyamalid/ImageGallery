(function () {
    'use strict';

    angular.module('imageApp', ['ngRoute','ngAnimate', 'ui.bootstrap'])
        .config(config);
 
    config.$inject = ['$routeProvider','$locationProvider'];
        function config($routeProvider,$locationProvider) {
            $routeProvider
            .when("/", {
                templateUrl: "ImageAppScripts/home/index.html",
                controller: "indexCtrl"
            })
             .when("/Images", {
                 templateUrl: "ImageAppScripts/images/images.html",
                 controller: "imagesCtrl"
             })
            .when("/Images/add", {
                templateUrl: "ImageAppScripts/images/add.html",
                controller: "imageAddCtrl"
            })
            .when("/Images/:id", {
                templateUrl: "ImageAppScripts/images/details.html",
                controller: "imageDetailsCtrl"
            })
            .when("/Images/edit/:id", {
                templateUrl: "ImageAppScripts/images/edit.html",
                controller: "imageEditCtrl"
            })
            .otherwise({ redirectTo: "/" });
       
    }
        
       
})();