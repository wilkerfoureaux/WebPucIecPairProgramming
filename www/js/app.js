/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

/*global myApp*/
myApp.controller('ListController', ['$scope', function($scope, $http) {
        $scope.users = [];
        $scope.getUsers = function(){
            return $scope.users;
        };
        $scope.yo = function(){
            $scope.users.push({
                name:"Joao",
                avatar:"http://lorempixel.com/64/64/cats",
            });
        };
}]);