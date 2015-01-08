var OpenTok = require('opentok');
// var Session = require('../models/session');
var opentok = new OpenTok('45110572', '172d9d69d70423fd6caa014d932456f9c35de748');

exports.create = function(req, res, next) {
  opentok.createSession({mediaMode: 'routed'}, function(err, session) {
    if (err) {
      return next(err);
    }

    var token = opentok.generateToken(session.sessionId, {
      role: 'publisher',
      expireTime: Math.round(Date.now() / 1000) + (30 * 24 * 60 * 60)
    });

    res.status(201).send({
      sessionId: session.sessionId,
      token: token
    });
  });
};

exports.show = function(req, res, next) {
  var token = opentok.generateToken(req.params.sessionId, {
    role: 'publisher',
    expireTime: Math.round(Date.now() / 1000) + (30 * 24 * 60 * 60)
  });

  res.render('sessions/show', {
    sessionId: req.params.sessionId,
    token: token
  });
};

exports.createToken = function(req, res, next) {
  var token = opentok.generateToken(req.params.sessionId, {
    role: 'publisher',
    expireTime: Math.round(Date.now() / 1000) + (30 * 24 * 60 * 60)
  });

  res.status(201).send({
    sessionId: req.params.sessionId,
    token: token
  });
};
