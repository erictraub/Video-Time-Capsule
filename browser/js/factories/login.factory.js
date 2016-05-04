app.factory('LoginFactory', function($http, $rootScope) {

	var LoginFactory = {};

	LoginFactory.submitLogin = function(userInfo) {
		return $http.post('/api/login', userInfo)
		.then(function(user) {
			$rootScope.currentUser = user.data;
			console.log('currentUser', $rootScope.currentUser)
		});
	};


	LoginFactory.logout = function() {
		return $http.delete('/api/logout')
		.then(function() {
			$rootScope.currentUser = null;
		});
	};	


	LoginFactory.getCurrentLoggedInUser = function() {
		return $http.get('/api/session')
		.then(function(user) {
			$rootScope.currentUser = user.data;
			return user.data;
		});
	};


	return LoginFactory;
});