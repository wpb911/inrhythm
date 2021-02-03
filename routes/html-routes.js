const path = require("path");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get('/', function(req, res){

    res.json('homepage')
  });

  app.get('/login',function(req,res){
    res.json('loginPage')
  });
  
  app.get('/test',function(req,res){
    res.json('testPage')
  });

  app.get('/result',function(req,res){
    res.json('resultPage')
  });



}