const { doesNotMatch } = require("assert");
const { assert } = require("console");
const { request } = require("http");
const path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

const superagent = require("superagent")
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get('/', function(req, res){

    res.render('index')
  });

  app.get('/login',function(req,res){
    res.render('login')
  });
  
  app.get('/results',isAuthenticated,function(req,res){
    res.render('results')
  });

  app.get('/compatibility',function(req,res){
    res.render('compatibility')
  })
  // app.post('/results',isAuthenticated,function(req,res){
  //   res.render('results')
  // });

  // app.get('/result',function(req,res){
  //   res.json('resultPage')
  // });



}