var app = angular.module('AgendaMedica', []);


app.controller('loginController', function($scope) {
    $scope.usuario = {};

    $scope.logar = function (){
   // logica para validar usuario
   console.log('ok');
    };
});