app.config(function ($stateProvider) {

  $stateProvider.state('uploadVidInfo', {
    url: '/uploadVidInfo',
    templateUrl: '/templates/uploadVidInfo.template.html',
    controller: 'UploadVidInfoCtrl',
    resolve: {
    	currentUser: function(LoginFactory) {
    		return LoginFactory.getCurrentLoggedInUser();
    	}
    }
  });
});