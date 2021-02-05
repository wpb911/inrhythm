const { doesNotMatch } = require("assert");
const { assert } = require("console");
const { request } = require("http");
const path = require("path");

const superagent = require("superagent")
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get('/', function(req, res){

    res.render('index')
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