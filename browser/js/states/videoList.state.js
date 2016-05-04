app.config(function ($stateProvider) {

	$stateProvider.state('videoList', {
	    url: '/videoList/:username',
	    templateUrl: '/templates/videoList.template.html',
	    controller: 'VideoListCtrl',
	    resolve: {
	    	vidsForUser: function($stateParams, RetrieveFactory) {
		    	return RetrieveFactory.retrieveVideos($stateParams.username)
	    	}
	    }
	});
});

