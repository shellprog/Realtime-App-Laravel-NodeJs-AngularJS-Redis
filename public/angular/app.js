var app = angular.module('DemoApp', ['ngRoute','btford.socket-io','ngSanitize']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/partials/users/index.html',
                controller: 'UsersController'
            }).
            otherwise({
                redirectTo: '/'
        });
    }
]);

app.factory('socket', function ($rootScope) {
    var socket = io.connect('http://127.0.0.1:3000/');
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});

app.controller('UsersController', function ($scope,socket,Users)
{

    $scope.user;
    $scope.users = [];

    Users.all().then(function(data)
    {
        console.log(data);
        $scope.users=data;
    });

    socket.on('users.update', function (data) {
        $scope.users=JSON.parse(data);
    });

    $scope.createUser = function(){

        Users.create($scope.user).then(function(data)
        {
            console.log(data);
        });

        console.log("create user");
    };

    $scope.deleteUser = function(user_id){

        Users.delete(user_id).then(function(data)
        {
            console.log(data);
        });

        console.log("delete user");
    }

    $scope.editUser = function(row){
        $scope.user = row;
        console.log($scope.user);
    };

    $scope.updateUser = function(){
        Users.update($scope.user).then(function(data)
        {
            console.log(data);
        });
    };

});