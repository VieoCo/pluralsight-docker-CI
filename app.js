// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only. >> Not for serious work >> Yet another auto-build test >> CI to Docker Cloud test.
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(8080);
module.exports.getApp = app;