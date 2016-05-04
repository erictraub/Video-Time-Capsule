app.config(function ($stateProvider) {

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/templates/login.template.html',
    controller: 'LoginCtrl'
  });
});