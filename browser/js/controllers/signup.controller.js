app.controller('SignupCtrl', function($scope, SignupFactory, $state) {

	$scope.submitSignup = function(info) {
		SignupFactory.submitSignup(info)
		.then(function(user) {
			$state.go('uploadVidInfo');
		});
	};

});