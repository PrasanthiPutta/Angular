var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var nodeserver = require('C:/Users/prasanthi.putta/AngularCrudApp/server');

router.get('/getProjects',function(req, res) {
  var query = "select * from projects";
  var projects=nodeserver.executeQuery(res, query);
  res.send(projects);
});

router.post('/createproject',function(req , res){     
  var query = "INSERT INTO projects (projectname,technolgy,info) VALUES (res.body.ProjectName,req.body.Technology,req.body.ProjectDetails)";
  nodeserver.executeQuery(res, query);
});

function newFunction(res) {
  res.send(allProducts);
}
