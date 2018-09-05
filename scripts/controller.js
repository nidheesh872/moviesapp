'use strict';

preferencesControllers.controller('Ctrl', ['$rootScope',
    '$scope',
    '$location',
    'dataService',
    '$filter',
    '$timeout',
    '$window',
    '$routeParams',
    function ($rootScope, $scope, $location, dataService, $filter, $timeout, $window, $routeParams) {

        $scope.isLoadedData = false;
        $scope.sortBy = 'movie_title';
        $scope.names = [];


        loadData();
        function loadData() {
            dataService.getData().then(function (data) {
                if (data.data) {
                    $scope.data = data.data;
                    //   $scope.data.splice(0, 1);
                    console.log("data", data);
                    $scope.names = $scope.data.map(function (item) {
                        return item['movie_title'];
                    });
                } else {
                    $scope.data = {};
                }
                $scope.isLoadedData = true;
            }, function (err) {
                $scope.data = {};
                $scope.isLoadedData = true;
                console.log("service failed", err);
            });
        }

    }]);