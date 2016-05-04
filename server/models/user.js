var mongoose = require('mongoose');
// var PlaceSchema = require('./place').schema;
var aType = require('./plugins/attractionTypePlugin');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});




UserSchema.plugin(aType, 'user');

module.exports = mongoose.model('User', UserSchema);