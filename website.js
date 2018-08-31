var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/public/';

app.use('/', router);

router.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});

//app.use(`*`, function(req, res) {
  //res.send('Error 404: shits not there');
//});

app.use(express.static(__dirname + '/public'));


app.listen(4444, function() {
  console.log("Server is running on port 4444");
});
