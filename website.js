var express = require('express');
var app = express();
//router just allows better routing within express
var router = express.Router();

//Helps serve static files
app.use(express.static(__dirname + '/public'));

//declares variable to call public dir
var path = __dirname + '/public/';

app.use('/', router);

router.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});


//Starts the server
app.listen(4444, function() {
  console.log("Server is running on port 4444");
});
