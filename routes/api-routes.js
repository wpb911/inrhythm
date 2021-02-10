const db = require("../models");
const passport = require("passport")
var numerology = require("numerologic");
module.exports = function (app) {

  app.post('/api/signup', (req, res) => {
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year
    }).then(function () {
      // res.redirect(307, "/login");
      res.redirect(303, "/login");
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });
  //   .then((answer) =>res.json(answer))
  // });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // res.json(req.user);
    // 2) user is auth - added "user" property to req obj
    res.redirect(303, "/results")
    // res.json(req.user);
  });

  app.get("/logout", function (req, res) {
    req.logout();
    console.log("logging out");
    res.redirect("/login")
  })

  app.get('/api/user', (req, res) => {
    // 4) call sqlze get that user data
    // req.user.email
    db.user.findAll({}).then((answer) => res.json(answer))
  });

  app.get('/api/user_data', (req, res) => {
    // console.log(req.user);
    // res.json(req.user);
    var day;
    var month;
    var year;
    day = req.user.day;
    month = req.user.month;
    year = req.user.year;
    console.log(day)
    console.log(month)
    console.log(year)
    let readdate = day + "." + month + "." + year;
    console.log(readdate);
    var bioRhythms = numerology(readdate).bioRhythms();
console.log(bioRhythms);
    // var bioRhythms = numerology("2.1.2000").bioRhythms();
    // console.log(bioRhythms);
    res.send(bioRhythms);
    // db.user.findAll({where:{
    //   email:req.user.email
    // }}).then((userData)=>{
    //   res.json(userData)
    // });
  })

  app.post('/api/compat', (req, res) => {
    db.compatibility.create(req.body).then((answer) => res.json(answer))
  });

  app.get('/api/compat', (req, res) => {
    db.compatibility.findAll({}).then((answer) => res.json(answer))
  });

  app.post('/api/bio', (req, res) => {
    db.biorhythm.create(req.body).then((answer) => res.json(answer))
  });

  app.get('/api/bio', (req, res) => {
    db.biorhythm.findAll({}).then((answer) => res.json(answer))
  });

}

