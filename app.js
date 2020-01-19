const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const app = express();

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRouter);

app.use(function(req, res, next){
  res.status(404).json({ status: 404, description: 'Not found'});
});

module.exports = app;
