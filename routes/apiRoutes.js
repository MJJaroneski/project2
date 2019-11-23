var db = require("../models");
//console.log("apiRoutes");
module.exports = function(app) {
  // Create a new example
  app.post("/api/contact", function(req, res) {
    console.log("req.body: " , req.body);
    db.Contacts.create({
      name: req.body.name,
      email: req.body.email,
      funfact: req.body.funfact,
      findout: req.body.findout
    }).then(function(dbContacts) {
      res.json(dbContacts);
    });
  });
};
