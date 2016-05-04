app.factory('UploadFactory', function($http) {

	return {
		sendInfo: function(info) {
			return $http.post('/api/video', info)
			.then(function(video) {
				return video.data;
			});
		}
	};

});

