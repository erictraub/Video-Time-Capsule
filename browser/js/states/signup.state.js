app.config(function ($stateProvider) {

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: '/templates/signup.template.html',
    controller: 'SignupCtrl'
  });
});