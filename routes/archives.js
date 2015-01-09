var OpenTok = require('opentok');
var opentok = new OpenTok('45110572', '172d9d69d70423fd6caa014d932456f9c35de748');

exports.create = function(req, res, next) {
  var options = {};
  if (req.body.name) {
    options.name = req.body.name;
  }

  opentok.startArchive(req.body.sessionId, options, function(err, archive) {
    if (err) {
      return next(err);
    }

    res.status(201).send(archive);
  });
};

exports.show = function(req, res, next) {
  opentok.getArchive(req.params.archiveId, function(err, archive) {
    if (err) {
      return next(err);
    }

    res.status(200).send(archive);
  });
};

exports.stop = function(req, res, next) {
  opentok.stopArchive(req.params.archiveId, function(err, archive) {
    if (err) {
      return next(err);
    }

    res.status(201).send(archive);
  });
};
