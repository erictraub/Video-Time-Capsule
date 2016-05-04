app.factory('RetrieveFactory', function($http, $rootScope) {
	return {

		getMyUploads: function(currentUserId) {
			return $http.get('/api/user/' + currentUserId)
			.then(function(videos) {
				return videos.data;
			})
			.then(function(videos) {
				videos.forEach(function(video) {
					var msTillOpen = video.openDateInMS - Date.now();
					var daysTillOpen = msTillOpen/8.64e7;
					if (daysTillOpen > 0) {
						video.daysTillAvailable = Math.floor(daysTillOpen + 1);						
					} else {
						video.daysTillAvailable = 'Currently Available';
					}
				});
				return videos;
			});
		},
		getSingleVideo: function(videoId) {
			return $http.get('/api/video/' + videoId)
			.then(function(video) {
				video = video.data;
				var msTillOpen = video.openDateInMS - Date.now();
				var daysTillOpen = msTillOpen/8.64e7;
				console.log(daysTillOpen);
				if (daysTillOpen > 0) {
					video.daysTillAvailable = Math.floor(daysTillOpen + 1);						
				} else {
					video.daysTillAvailable = 'Currently Available';
				}
				return video;
			});
		},
		getSentToMe: function(sentToId) {
			return $http.get('/api/sentTo/' + sentToId)
			.then(function(videos) {
				console.log('vids', videos.data)
				return videos.data;
			})
			.then(function(videos) {
				videos.forEach(function(video) {
					var msTillOpen = video.openDateInMS - Date.now();
					var daysTillOpen = msTillOpen/8.64e7;
					if (daysTillOpen > 0) {
						video.daysTillAvailable = Math.floor(daysTillOpen + 1);						
					} else {
						video.daysTillAvailable = 'Currently Available';
					}
				});
				return videos;
			});
		}

	}
});








