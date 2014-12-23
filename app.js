var express = require('express');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/opentok')

var app = express();

var sessions = require('./routes/sessions');

app.post('/sessions', sessions.create);
app.post('/tokens', sessions.createToken);

app.listen(process.env['PORT'] || 3000);