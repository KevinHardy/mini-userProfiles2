var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http, $q) {//q is 'promises', promises are like callback functions

    this.getUsers = function() {
        //how promises work
        /*var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=1'
        }).then(function(response) {
            deferred.resolve(response.data.data);
        }, function(err) {
            deferred.reject(err);
        });

        return deferred.promise;*/

        //original function
        return $http({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=1'
        });
        //POST syntax checks data THEN posts it, like USPS waits to verify stamp is paid, then mails package
        /*
        return $http({
            method: 'POST',
            url: 'http://reqr.es/api/users?page=1'
            data: {
                name: "chris",
                job: {
                    name: "lkdafsa"
                }
            }
        })
        */
  };


});
