(function (app) {
    'use strict';
    angular
    .module('imageApp')
    .controller('imageAddCtrl', imageAddCtrl);

    imageAddCtrl.$inject = ['$scope', '$rootScope','$location', '$routeParams', 'dataService'];

    function imageAddCtrl($scope,$rootScope, $location, $routeParams, dataService) {

        $scope.pageClass = 'page-images';
        
        $scope.image = { Location: null };
        
        $scope.locations = [];
        $scope.isReadOnly = false;
        $scope.AddImageData = AddImageData;
        $scope.prepareFiles = prepareFiles;
        $scope.FileMessage = '';
        $scope.updateID = updateID;
        var Image = null;
       

        function loadLocationData() {
            dataService.get('/api/Locations/', null,
            LocationsLoadCompleted,
            LocationsLoadFailed);
        }

        function LocationsLoadCompleted(response) {
            $scope.locations = response.data;
            
        }

        function LocationsLoadFailed(response) {
          //  alertService.displayError(response.data);
        }

        function AddImageData() {
            AddImageModel();
        }

        function AddImageModel() {
            console.log($scope.image);
            dataService.post('/api/Images', $scope.image,
            addImageSucceded,
            addImageFailed);
        }

        function prepareFiles($files) {
            ImageData = $files;
        }

        function addImageSucceded(response) {
           // alertService.displaySuccess($scope.image.ImageName + ' has been submitted to Images');
            $scope.image = response.data;
            redirectToGallery();
        }

        function addImageFailed(response) {
            console.log(response);
           // alertService.displayError(response.statusText);
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
        function redirectToGallery() {
            $location.url('Images/');
        }
        $scope.uploadFile = function (input) {
            $scope.FileMessage = '';
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                var extension = input.files[0].type;
                if (extension == 'image/jpeg' || extension == 'image/png' || extension == 'image/jpg') {
                    reader.onload = function (e) {

                        //Sets the Old Image to new New Image


                        angular.element(document.getElementById('photo-id')).attr('src', e.target.result);

                        //Create a canvas and draw image on Client Side to get the byte[] equivalent
                        var canvas = document.createElement("canvas");
                        var imageElement = document.createElement("img");

                        imageElement.setAttribute('src', e.target.result);
                        canvas.width = imageElement.width;
                        canvas.height = imageElement.height;
                        var context = canvas.getContext("2d");
                        context.drawImage(imageElement, 0, 0);
                        var base64Image = canvas.toDataURL("image/jpeg");

                        //Removes the Data Type Prefix 
                        //And set the view model to the new value
                        $scope.image.ImageData = base64Image.replace(/data:image\/jpeg;base64,/g, '');
                    }

                    //Renders Image on Page
                    reader.readAsDataURL(input.files[0]);
                }
                else {
                    $scope.FileMessage = 'please upload correct File Name, File extension should be .jpeg, .png or .jpg';

                }
            }
        };
        
        function updateID()
        {
            $scope.image.LocationId = $scope.image.Location
        }
        loadLocationData();
    }

})();