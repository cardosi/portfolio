var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.controller('aboutControler', function(){

});

portfolioApp.controller('projectsController', function(){

});

portfolioApp.controller('connectController', function(){

});

portfolioApp.controller('resumeController', function(){

});

portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({enabled: true});

  $routeProvider.otherwise({
    redirectTo: '/'
  });

  $routeProvider.when('/', {
    templateUrl: 'partials/about.html',
    controller: 'aboutControler',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/projects', {
    templateUrl: 'partials/projects.html',
    controller: 'projectsController',
    controllerAs: 'pCtrl'
  });

  $routeProvider.when('/connect', {
    templateUrl: 'partials/connect.html',
    controller: 'connectController',
    controllerAs: 'cCtrl'
  });

  $routeProvider.when('/resume', {
    templateUrl: 'partials/resume.html',
    controller: 'resumeController',
    controllerAs: 'rCtrl'
  });

}]);
