app.config(function ($stateProvider) {
  $stateProvider.state('retrieve', {
    url: '/retrieve',
    templateUrl: '/templates/retrieve.template.html',
    controller: 'RetrieveCtrl',
    resolve: {
    	currentUser: function(LoginFactory) {
    		return LoginFactory.getCurrentLoggedInUser();
    	},
      myUploads: function(RetrieveFactory, $rootScope) {
        return RetrieveFactory.getMyUploads($rootScope.currentUser._id);
      },
      sentToMe: function(RetrieveFactory, $rootScope) {
        return RetrieveFactory.getSentToMe($rootScope.currentUser._id);
      }
    }
  });
});


app.config(function ($stateProvider) {
  $stateProvider.state('retrieve.myUploads', {
    url: '/retrieve/myUploads',
    templateUrl: '/templates/retrieve.myUploads.template.html'
  });
});


app.config(function ($stateProvider) {
  $stateProvider.state('retrieve.sentToMe', {
    url: '/retrieve/sentToMe',
    templateUrl: '/templates/retrieve.sentToMe.myUploads.template.html'
  });
});