app.controller('WatchVideoCtrl', ['$scope', 'singleVideo', function($scope, singleVideo) {

	$scope.video = singleVideo;
	console.log($scope.video);

		console.log($scope.video.daysTillAvailable)
	if ($scope.video.daysTillAvailable > 0) {
		$scope.currentlyAvailable = false;
	} else {
		$scope.currentlyAvailable = true;
	};

	var myVideo = document.getElementsByTagName('video')[0];
	myVideo.src = $scope.video.source;


}]);
