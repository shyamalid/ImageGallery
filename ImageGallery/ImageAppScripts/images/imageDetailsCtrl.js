(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .controller('imageDetailsCtrl', imageDetailsCtrl);

    imageDetailsCtrl.$inject = ['$scope', '$location', '$routeParams',  'dataService'];

    function imageDetailsCtrl($scope, $location, $routeParams,  dataService) {
        $scope.pageClass = 'page-imagedetails';
        $scope.image = {};
        $scope.loadingImage = true;
        $scope.isReadOnly = true;
        $scope.deleteImage = deleteImage;
        

        function loadImage() {

            $scope.loadingImage = true;
            dataService.get('/api/Images/details/' + $routeParams.id, null,
            imageLoadCompleted,
            imageLoadFailed);
        }

     
        function imageLoadCompleted(result) {
            $scope.image = result.data;
            $scope.loadingImage = false;
        }

        function imageLoadFailed(response) {
            //notificationService.displayError(response.data);
        }
        function deleteImage()
        {
            dataService.deleteOp('/api/Images/' + $routeParams.id, null,
            imageDeleteCompleted,
            imageDeleteFailed);
        }
        function imageDeleteCompleted(result) {
            $location.url('/Images');
        }

        function imageDeleteFailed(response) {
            //notificationService.displayError(response.data);
        }
     
        loadImage();
    }
})();