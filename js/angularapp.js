(function() {
  'use strict';
  
  var baseURL = 'https://mrdmcostura.github.io';
var app = angular.module("app", ["ngRoute"]); 
  
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: baseURL + '/templates/home.html',
          controller: 'MainController'
        })
        .when('/contato', {
          templateUrl: baseURL + '/templates/contato.html',
          controller: 'ContatoController'
        })
      .when('/hello', {
          templateUrl: 'hello.html',
          controller: 'HelloController'
        })     
            .when('/empresa', {
          templateUrl: baseURL + '/templates/empresa.html',
          controller: 'EmpresaController'
        })     
                  .when('/servicos', {
          templateUrl: baseURL + '/templates/servicos.html',
          controller: 'ServicosController'
        })     
       .otherwise({
        redirectTo: '/'
       });
    
     // use the HTML5 History API
      //  $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('');

    
    });
  
//  app.run([ '$templateCache', function($templateCache) {
//  $templateCache.put('http://www.odati.com.br/templates/home.html', 'http://www.odati.pro/templates/contato.html', 'http://www.odati.com.br/templates/empresa.html', 'http://www.odati.com.br/templates/servicos.html');
//}]);
/*  
  app.run(function($rootScope, $route, $routeParams, $location) {
      
      $rootScope.$on('$routeChangeStart',function(evt,next,current){
        console.log('Nome do Evento:'+evt.name);
        console.log('Próxima Rota:'+ angular.toJson(next));
        console.log('Rota Atual:'+ angular.toJson(current));
      });

      $rootScope.$route = $route;
      $rootScope.$location = $location;
      $rootScope.$routeParams = $routeParams;
});
*/
  app.controller("MainController", function($scope) {
    $('.slider').slider();
});
      app.controller("NavController", function($scope, $location) {
 $('.button-collapse').sideNav({closeOnClick: true});
        
         $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
      });
  
  app.controller("HelloController", function($scope) {

});
  
    app.controller("FooterController", function($scope) {

});
  app.controller("ServicosController", function($scope) {

});
    app.controller("EmpresaController", function($scope) {

});
    
      app.directive('navbar', function () {
  return {
    restrict: 'A',
    controller: 'NavController',
    controllerAs: 'ctrl',
    templateUrl: baseURL + '/templates/navbar.html'
  };
});
  
        app.directive('footer', function () {
  return {
    restrict: 'A',
    controller: 'FooterController',
    controllerAs: 'ctrl',
    templateUrl: baseURL+ '/templates/footer.html'
  };
});
  
  app.controller("ContatoController", function($scope, $location) {
    $scope.mail = {nome: "", email: "", telefone: "", asunto: "", mensagem: ""};
    $scope.submit = function(event){
      
  event.preventDefault();
    $.ajax({
    url: "https://formspree.io/mrdmcostura@gmail.com", 
    method: "POST",
    data: {message: "Nome: "+ $scope.mail.nome + "\n" +
                    "Email: "+ $scope.mail.email + "\n" +
                    "Telefone: "+ $scope.mail.telefone + "\n" +
                    "Asunto: "+ $scope.mail.asunto + "\n" +
                    "Mensagem: "+ $scope.mail.mensagem, _replyto: $scope.mail.email},
    dataType: "json"
}).done(function(resp){
      console.log("success");
$scope.$apply(function(){    
  $location.path("/");
    });
    }).fail(function(error){
      console.log("fail");
    });
    };
    });
})();
