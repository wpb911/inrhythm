// starter code

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");

var passport = require("./config/passport");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// Routes
// =============================================================
//require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// remove {force: true} after testing and before real data if data is static
// all test users will be removed after restarting program - currently removed

db.sequelize.sync().then(function() {
    
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    // console.log(process.env);
  });
});