app.controller('listarPacienteController', function($scope){
    $scope.listPaciente = [
        {
            id:'1',
            nome:'fulano',
            dataNascimento:'01-01-2001',
            cpf:'123.321.456-98',
            endereco:'casa do alho'
        }];
});