const db = require("../models");
const passport = require("passport")

module.exports = function(app){
  app.post('/api/test',(req,res)=>{
    db.biorhythm.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/test',(req,res)=>{
    db.biorhythm.findAll({}).then((answer) =>res.json(answer))
  });



}

// {
//   physical:1;
//   emotional:2;
//   intellectual:3
// }

// {
//   "physical":"1",
//   "emotional":"2",
//   "intellectual":"3"
// }