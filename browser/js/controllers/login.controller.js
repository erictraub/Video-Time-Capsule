app.controller('LoginCtrl', function($scope, LoginFactory, $state) {
	$scope.submitLogin = function(userInfo) {
		LoginFactory.submitLogin(userInfo)
		.then(function() {
			$state.go('uploadVidInfo');
		});
	};
});