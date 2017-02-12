var express = require('express');
var app = express();

//PORT
var port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('public'));

//LISTEN
app.listen(port, function(){
  console.log('PORTFOLIO RUNNING ON:', port);
});
