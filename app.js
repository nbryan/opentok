var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/opentok')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var sessions = require('./routes/sessions');
app.post('/sessions', sessions.create);
app.get('/sessions/:sessionId', sessions.show);
app.post('/sessions/:sessionId/tokens', sessions.createToken);

var archives = require('./routes/archives');
app.post('/archives', archives.create);
app.get('/archives/:archiveId', archives.show);
app.post('/archives/:archiveId/stop', archives.stop);

app.listen(process.env['PORT'] || 3000);
