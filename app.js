var express = require('express');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/opentok')

var app = express();
app.set('view engine', 'ejs');

var sessions = require('./routes/sessions');

app.post('/sessions', sessions.create);
app.get('/sessions/:sessionId', sessions.show);
app.post('/sessions/:sessionId/tokens', sessions.createToken);

app.listen(process.env['PORT'] || 3000);
