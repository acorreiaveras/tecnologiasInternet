var app = angular.module('AgendaMedica', ['ngRoute'])


app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
      when('/cadastroPaciente', {
        templateUrl: 'cadastroPaciente.html',
        controller : 'cadastroPacienteController'
      })
      .when('/listaPaciente',{
        templateUrl: 'listarPaciente.html',
        controller : 'listarPacienteController'
      })
      .when('/cadastroMedico',{
        templateUrl: 'cadastroMedico.html',
        controller : 'cadastroMedicoController'
      })
      .when('/listaMedico',{
        templateUrl: 'listarMedico.html',
        controller : 'listarMedicoController'
      })
      .when('/cadastroConsulta',{
        templateUrl: 'cadastroConsulta.html',
        controller : 'cadastroConsultaController'
      })
      .when('/listaConsulta',{
        templateUrl: 'listarConsulta.html',
        controller : 'listarConsultaController'
      });      
    }]);