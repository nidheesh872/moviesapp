'use strict';

// Declare app level module which depends on views, and components
var movieApp = angular.module('movieApp', ['ngRoute', 'autocomplete',  'preferencesControllers', 'preferencesServices']);

var preferencesControllers = angular.module('preferencesControllers', []);
var preferencesServices = angular.module('preferencesServices', []);

movieApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
		function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'Ctrl'
        }).otherwise({
            redirectTo: '/home'
        });
		}]);

movieApp.directive('buttonDropdown', ['$timeout', function ($timeout) {
    function link(scope, element, attrs) {
        $(element).dropdown({ belowOrigin: true});
    }
    return {
        link: link
    };
}]);

