app.config(function ($stateProvider) {

  $stateProvider.state('upload', {
    url: '/upload/:videoId',
    templateUrl: '/templates/upload.template.html',
    controller: 'UploadCtrl',
    resolve: {
        // use local storage instead of resolves ($localStorage)
    	currentUser: function(LoginFactory) {
    		return LoginFactory.getCurrentLoggedInUser();
    	}
    }
  });
});