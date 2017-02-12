var express = require('express');
var app = express();

//PORT
var port = 3000 || process.env.PORT;

//MIDDLEWARE
app.use(express.static('public'));

//LISTEN
app.listen(port, function(){
  console.log('PORTFOLIO RUNNING ON:', port);
});
