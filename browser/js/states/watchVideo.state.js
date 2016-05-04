app.config(function ($stateProvider) {

  $stateProvider.state('watchVideo', {
    url: '/watchVideo/:videoId',
    templateUrl: '/templates/watchVideo.template.html',
    controller: 'WatchVideoCtrl',
    resolve: {
    	singleVideo: function(RetrieveFactory, $stateParams) {
    		return RetrieveFactory.getSingleVideo($stateParams.videoId);
    	},
        currentUser: function(LoginFactory) {
            return LoginFactory.getCurrentLoggedInUser();
        }
    }
  });
});

