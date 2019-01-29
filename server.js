var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('./server/config/mongoose.js')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./server/config/routes.js')(app)
var path = require('path');

app.use(express.static(__dirname + '/public/dist/public'));
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8000, function() {
    console.log("listening on port 8000");
})
