app.factory('SignupFactory', function($http, $rootScope) {
	var SignupFactory = {};

	SignupFactory.submitSignup = function(userInfo) {
		return $http.post('/api/signup', userInfo)
		.then(function(user) {
			$rootScope.currentUser = user.data;
		});
	};





	return SignupFactory;
});