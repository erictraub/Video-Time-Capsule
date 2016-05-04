var mongoose = require('mongoose');
// var PlaceSchema = require('./place').schema;
var aType = require('./plugins/attractionTypePlugin');

var VideoSchema = new mongoose.Schema({
	uploadedBy: {
		type: mongoose.Schema.Types.ObjectId, 
   		ref: 'User',
   		required: true
	},
	sentTo: {
		type: mongoose.Schema.Types.ObjectId, 
   		ref: 'User'
	},
	videoName: {
		type: String,
		required: true
	},
	source: {
		type: String,
	},
	createDate: {
		type: Date,
		default: Date.now
	},
	daysLocked: {
		type: Number,
		default: 365
	}
});


VideoSchema.plugin(aType, 'video');


VideoSchema.virtual('openDate').get(function() {
	var dayCreated = this.createDate.getTime() //in MS
	var MSInADay = 8.64e7;
	var daysLocked = this.daysLocked;
	// var daysLocked = 365; // make this a prop on model soon
	var openDateInMS = dayCreated + (daysLocked * MSInADay); 
	var openDateInISO = new Date(openDateInMS).toISOString();
	return openDateInISO;
});

VideoSchema.virtual('createDateInMS').get(function() {
	var MS = this.createDate.getTime() //in MS
	return MS;
});


VideoSchema.virtual('openDateInMS').get(function() {
	var dayCreated = this.createDate.getTime() //in MS
	var MSInADay = 8.64e7;
	var daysLocked = this.daysLocked;
	// var daysLocked = 365; // make this a prop on model soon
	var openDateInMS = dayCreated + (daysLocked * MSInADay); 
	return openDateInMS;
});



module.exports = mongoose.model('Video', VideoSchema);