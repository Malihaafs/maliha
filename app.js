var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});



app.listen(port,()=>{  // do not add localhost here if you are deploying it
  console.log("server listening to port");
});