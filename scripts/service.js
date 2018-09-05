'use strict';

preferencesServices.service("dataService", ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {

    var restAPIUrl = "";
    var authorization = ""

    var httpGet = function (deferred, url, options) {
        $http.get(url, options)
            .then(function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });
    }

    this.getData = function (language, stars, page) {
        var deferred = $q.defer();
        httpGet(deferred, 'http://starlord.hackerearth.com/movieslisting');
        return deferred.promise;
    }

}]);