app.controller('VideoListCtrl', function($scope, vidsForUser) {

	$scope.videos = vidsForUser;
	console.log($scope.videos);


});
