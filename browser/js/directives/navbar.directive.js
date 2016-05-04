app.directive('navbar', function(LoginFactory, $state) {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/navbar.template.html',
		link: function(scope, elem, attrs) {

			scope.logout = function() {
				console.log('hit')
				LoginFactory.logout()
				.then(function() {
					$state.go('login');
				})
				.then(null, function(err) {
					console.error(err);
				});
			};

		}
	};
});