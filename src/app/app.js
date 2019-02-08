var express = require('express');
var app = express();

var ProjectController = require('C:/Users/prasanthi.putta/AngularCrudApp/src/Project');
app.use('/', ProjectController);

module.exports = app;