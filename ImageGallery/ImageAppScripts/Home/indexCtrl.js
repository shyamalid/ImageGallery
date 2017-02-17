(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ['$scope', 'dataService'];

    function indexCtrl($scope, dataService) {
        $scope.pageClass = 'page-home';
        $scope.loadingImages = true;
        
        $scope.isReadOnly = true;

        $scope.latestImages = [];
        $scope.loadData = loadData;
        $scope.pagination = {};
        function loadData() {
            //dataService.get('/api/Images', null,
            //            imagesLoadCompleted,
            //            imagesLoadFailed);

           
        }

        function imagesLoadCompleted(result) {
            $scope.latestImages = result.data;
            $scope.loadingImages = false;
        }

        

        function imagesLoadFailed(response) {
          //  notificationService.displayError(response.data);
        }



      
        //loadData();
    }

})();