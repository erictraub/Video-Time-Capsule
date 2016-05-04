var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/video-time-capsule');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
  Video: require('./video'),
  User: require('./user')
};
