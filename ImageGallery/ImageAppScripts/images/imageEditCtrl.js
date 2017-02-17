(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .controller('imageEditCtrl', imageEditCtrl);
    imageEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'dataService'];

    function imageEditCtrl($scope, $location, $routeParams, dataService) {
        $scope.pageClass = 'page-image';
        $scope.image = {};
        $scope.locations = [];
        $scope.loadingImage = true;
        $scope.isReadOnly = false;
        $scope.UpdateImage = UpdateImage;
        

        var Imagedata = null;


        function loadLocationData() {
            dataService.get('/api/Locations/', null,
            LocationsLoadCompleted,
            LocationsLoadFailed);
        }

        function LocationsLoadCompleted(response) {
            $scope.locations = response.data;

        }

        function LocationsLoadFailed(response) {
            //notificationService.displayError(response.data);
        }
        function loadImage() {

            $scope.loadingImage = true;
            dataService.get('/api/Images/details/' + $routeParams.id, null,
            imageLoadCompleted,
            imageLoadFailed);
        }

        function imageLoadCompleted(result) {
            $scope.image = result.data;
            $scope.loadingImage = false;
            
            loadLocationData();
        }

        function imageLoadFailed(response) {
            //notificationService.displayError(response.data);
        }

        function loadLocationData() {
            dataService.get('/api/Locations/', null,
            LocationsLoadCompleted,
            LocationsLoadFailed);
        }

        function LocationsLoadCompleted(response) {
            $scope.locations = response.data;
          

        }

        function LocationsLoadFailed(response) {
            //notificationService.displayError(response.data);
        }

        

        function UpdateImage() {
            console.log($scope.image);
            dataService.editOp('/api/Images', $scope.image,
            updateImageSucceded,
            updateImageFailed);
        }

        
        function updateImageSucceded(response) {
            console.log(response);
            //notificationService.displaySuccess($scope.movie.Title + ' has been updated');
            $location.url('/Images' );
        }

        function updateImageFailed(response) {
           // notificationService.displayError(response);
        }

        $scope.dateOptions = {

            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1,
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.open = function () {

            $scope.popup1.opened = true;

        };
        $scope.popup1 = {
            opened: false
        };

        loadImage();
       
    }

})();