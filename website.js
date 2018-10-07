var express = require('express');
var app = express();
//router just allows better routing within express
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

//Helps serve static files
app.use(express.static(__dirname + '/public'));

// connect to the database
let db;


var url = 'mongodb://dmakowski://///s%23716@localhost:27017/admin';

//connects to the database using the URL, auth, and database name
MongoClient.connect(url, function (err, database) {
  if (err) {
    return console.log(err);
  }
  db = database;

  //Starts the server
  app.listen(4444, function() {
    console.log("Server is running on port 4444");
  });
});

//declares variable to call public dir
var path = __dirname + '/public/';

app.use('/', router);

//serves home page
router.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});

//Create post request for /clicked which will create a document in the database
app.post('/clicked', (req, res) => {
  var click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('clicks').save(click, function (err, result)  {
    if (err) {
      return console.log(err);
    }
    console.log('Click added to DB!');
    res.sendStatus(201);
  });
});


// get the click data from the database
app.get('/clicked', (req, res) => {
  db.collection('clicks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});
