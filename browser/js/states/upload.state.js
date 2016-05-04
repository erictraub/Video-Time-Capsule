app.config(function ($stateProvider) {

  $stateProvider.state('upload', {
    url: '/upload/:videoId',
    templateUrl: '/templates/upload.template.html',
    controller: 'UploadCtrl',
    resolve: {
    	currentUser: function(LoginFactory) {
    		return LoginFactory.getCurrentLoggedInUser();
    	}
    }
  });
});