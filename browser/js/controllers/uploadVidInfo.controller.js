app.controller('UploadVidInfoCtrl', function($scope, UploadFactory, $rootScope, $state) {

	console.log('currentUser in ctrl',$rootScope.currentUser)
	$scope.info = {uploadedBy: $rootScope.currentUser};

	$scope.submitInfo = function() {
		console.log('vid info', $scope.info)
	    UploadFactory.sendInfo($scope.info)
	    .then(function(video) {
	    	$state.go('upload', {videoId: video._id})
	    });
    };

});