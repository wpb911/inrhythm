const db = require("../models");
const passport = require("passport")

module.exports = function(app){

  app.post('/api/user',(req,res)=>{
    db.user.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/user',(req,res)=>{
    db.user.findAll({}).then((answer) =>res.json(answer))
  });

  app.post('/api/compat',(req,res)=>{
    db.compatibility.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/compat',(req,res)=>{
    db.compatibility.findAll({}).then((answer) =>res.json(answer))
  });

  app.post('/api/bio',(req,res)=>{
    db.biorhythm.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/bio',(req,res)=>{
    db.biorhythm.findAll({}).then((answer) =>res.json(answer))
  });

}

