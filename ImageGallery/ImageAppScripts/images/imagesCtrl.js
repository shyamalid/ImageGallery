(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .controller('imagesCtrl', imagesCtrl);

    imagesCtrl.$inject = ['$scope', 'dataService'];

    function imagesCtrl($scope, dataService) {
        $scope.pageClass = 'page-images';
        $scope.loadingImage = true;
        $scope.noImages = false;
        $scope.page = 0;
        $scope.pagesCount = 0;

        $scope.Images = [];
        $scope.pagination = {};
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        
        function search(page) {
            page = page || 0;

            $scope.loadingImage = true;
           
            var config = {
                params: {
                    page: page,
                    pageSize: 4
                }
            };
            
            
            dataService.get('/api/Images/', config,
            imagesLoadCompleted,
            imagesLoadFailed);
        }

        function imagesLoadCompleted(result) {
            
            $scope.Images = result.data.Items;
            console.log($scope.Images);
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingImage = false;
            if ($scope.totalCount !=0) {
                $scope.noImages = false;
            }
            else
            {
                $scope.noImages = true;
            }
            
            if ($scope.filterImages && $scope.filterImages.length) {
               // notificationService.displayInfo(result.data.Items.length + ' images found');
            }

        }

        function imagesLoadFailed(response) {
            //notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterImages = '';
            search();
        }

        $scope.search();
    }

})(); 