const db = require("../models");
const passport = require("passport")

module.exports = function(app){

  app.post('/api/login',(req,res)=>{
    db.User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:req.body.password,
      day:req.body.day,
      month:req.body.month,
      year:req.body.year
    }).then((answer) =>res.json(answer))
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

