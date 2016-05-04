app.controller('UploadCtrl', ['$log', '$scope', 'Upload', 'UploadFactory', '$stateParams', function($log, $scope, Upload, UploadFactory, $stateParams){

  // FOR UPLOADING VIDEO
  console.log('stateParams: ', $stateParams)
  var self = this;
  $scope.busy = true;
  $scope.ready = false;

  $scope.files = [];

  $scope.$watch('files', function () { 
    $scope.upload($scope.files);
  });

  $scope.progress;

  $scope.upload = function (files) {
    $log.debug("upload... ", files);

        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: '/api/upload/' + $stateParams.videoId,
                    fields: {
                      'filecontext': 'product',
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progress = progressPercentage;
                    $log.debug('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    $log.debug('file ' + config.file.name + 'uploaded. Response: ' + data);
                });
            }
        }
    };
    // 

    // $scope.submitInfo = function() {
    //   $scope.formCompleted = true;
    //   UploadFactory.sendInfo($scope.info)
    //   .then(function(response) {
    //     console.log(response);
    //   });
    // };

}]);








// asdfasdfasdfa
// sdfasdfasdfa
// sdfasdfasdfasd
// fasdfasdfasd
// fasdfasdfasdasdfasdf
// asdfasdfasdfafasdfasdfa
// sdfasdfasdfasdasd

// asdfasdfasdfafasdfasdfasdfasdfa
// sdfasdfasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfa
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdfasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdfasdfasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdfasdfasdfasdfasdf
// asdfasdfasdfafasdfasdfasdfasdfafasdfasdfsdfasdfafasdfasdfasdfasdfasdfasdf