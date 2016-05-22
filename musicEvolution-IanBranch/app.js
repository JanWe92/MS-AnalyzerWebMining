var http = require("http");
var fs = require('fs');
var express = require('express');
var port = 3000;
var serverUrl = "127.0.0.1";
var counter = 0;
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'server18.webgo24.de',
  user     : 'web223_8',
  password : 'nutboyz4M1n1ng',
  database : 'web223_db8'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


connection.query('SELECT COUNT(*) artist', function(err, rows, fields) {
connection.end();
  if (!err){
    numberSongs=rows;
    console.log('The solution is: ', rows);
  }else{
    console.log('Error while performing Query.');
  }
  });


app.get('/', function (req, res) {
    
    fs.readFile("index.html", function (err, text) {
        res.setHeader("Content-Type", "text/html");
        res.end(text);
    });
});
app.use(express.static('../musicEvolution-IanBranch'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
