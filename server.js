// More here -> https://www.npmjs.com/package/mssql

//var express = require('express');
//var app = express();

var app = require('/Users/prasanthi.putta/AngularCrudApp/src/app');
var port = process.env.PORT || 3000;
let bodyParser = require('body-parser'),
 cors = require('cors');
const addroutes = express.Router();
    //app.get('/', function (req, res) {
var sql = require('mssql/msnodesqlv8');
var config = {
  connectionString: 'Driver=SQL Server;Server=IRSDSK255\\SQLEXPRESS2014;Database=EXPLORERS;Trusted_Connection=true;'
};
app.use(bodyParser.json());
    app.use(cors());

var  executeQuery = function(res, query){  
sql.connect(config, err => {
  new sql.Request().query(query, (err, result) => {
      //to execute procedures => new sql.Request().execute('GETPROJECTS',function(err, result){ 
    if(err) { // SQL error, but connection OK.
      console.log("  Shirtballs: "+ err);
    } else { // All is rosey in your garden.
      console.dir(result.recordset);
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(result.recordset);
      sql.close();
    };
  });
});
}
app.route('/getprojects').get(function(req , res){
    var query = "select * from projects";
    executeQuery (res, query);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
/*

//POST API
addroutes.route('/createproject').post(function(req , res){     
                var query = "INSERT INTO projects (projectname,technolgy,info) VALUES (res.body.ProjectName,req.body.Technology,req.body.ProjectDetails)";
                executeQuery (res, query);
});

//PUT API
 app.put("/api/user/:id", function(req , res){
                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/user /:id", function(req , res){
                var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
                executeQuery (res, query);
});
*/

sql.on('error', err => { // Connection borked.
  console.log(".:The Bad Place:.");
  console.log("  Fork: "+ err);
});

//});

var server = app.listen(port,function () {
    console.log('Server is running..');
});

exports.executeQuery = executeQuery;
module.exports = executeQuery();
/*
var sql = require("mssql/msnodesqlv8"); 
//Initiallising connection string
var dbConfig = {    
    driver: 'msnodesqlv8',
    connectionString:'Driver={SQL Server Native Client 11.0};Server={IRSDSK255\\SQLEXPRESS2014};Database={EXPLORERS};Trusted_Connection={yes};'
};
var getStudents = function(res){
    sql.connect(dbConfig, function(err){
        if(err){
            console.log("Error while connecting database :- " + err);
            res.send(err);
           sql.close();
        }
        else {                       
            var request = new sql.Request();          
            request.execute('GETPROJECTS',function(err, data){
                if(err){
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                }
                else{
                    res.send(data.recordset);
                }
               sql.close();    
            });            
        }
    });
}*/

