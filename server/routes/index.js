var router = require('express').Router();
module.exports = router;
var path = require('path');
var busboy = require('connect-busboy');
var fs = require('fs');
var Video = require('../models').Video;
var User = require('../models').User;






router.get('/session', function(req, res, next) {
    User.findById(req.session.userId)
    .then(function(user) {
        res.send(user);
    })
    .then(null, next);
});

router.post('/login', function(req, res, next) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    .exec()
    .then(function(user) {
        if (!user) {
            res.sendStatus(401);
        } else {
            req.session.userId = user._id;
            res.send(user);            
        }
    })
    .then(null, next);
});


router.post('/signup', function(req, res, next) {
    User.create(req.body)
        .then(function(user) {
        req.session.userId = user._id;
        res.status(201).send(user);
    })
    .then(null, next);
});

router.delete('/logout', function(req, res, next) {
    delete req.session.userId;
    res.sendStatus(204);
    next();
});

router.post('/video', function(req, res, next) {
    User.findOne({username: req.body.sentTo})
    .then(function(user) {
        if (!user) {
            return null
        } else {
            return user._id;
        }
    })
    .then(function(sentToId) {
        return Video.create({
            uploadedBy: req.body.uploadedBy._id,
            videoName: req.body.videoName,
            daysLocked: req.body.daysLocked,
            sentTo: sentToId
        })
        
    })
    .then(function(video) {
        res.send(video);
    })
    .then(null, next);
});

router.use(busboy());
router.post('/upload/:videoId',function(req, res, next) {
	var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename); 
        // store video in File Structure
        fstream = fs.createWriteStream(path.join(__dirname, '../../browser/uploaded-files/' + filename));
        file.pipe(fstream);
        fstream.on('close', function () {
            // store video info in DB
            Video.findById(req.params.videoId)
            .exec()
            .then(function(video) {
                video.source = '/uploaded-files/' + filename;
                return video.save();
            })
            .then(function(video) {
        	    console.log('Upload complete.');
                res.send('Upload complete.');    
            });
        });
    });
});

router.get('/user/:currentUserId', function(req, res, next) {
    Video.find({uploadedBy: req.params.currentUserId})
    .then(function(videos) {
        res.send(videos);
    });
});

router.get('/video/:videoId', function(req, res, next) {
    Video.findOne({_id: req.params.videoId})
    .then(function(video) {
        res.send(video);
    });
});

router.get('/sentTo/:sentToId', function(req, res, next) {
    Video.find({sentTo: req.params.sentToId})
    .populate('uploadedBy')
    .then(function(videos) {
        res.send(videos);
    })
    .then(null, next);
});












router.use(function(req, res) {
	res.status(404).end();
});