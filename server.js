// starter code


// Requiring our models for syncing
var db = require("./models");

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

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
    console.log(process.env);
  });
});