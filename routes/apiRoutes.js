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
  app.post("/api/artist", function(req, res) {
    console.log("req.body: " , req.body);
    db.Artist.create({
        artistName: req.body.artistName,
        artistEmail: req.body.artistEmail,
        artistPhone: req.body.artistPhone,
        artistHome: req.body.artistHome,
        artistAvailability: req.body.artistAvailability,
        artistGenre: req.body.artistGenre,
        artistFB: req.body.artistFB,
        artistEPK: req.body.artistEPK,
        artistTellUs: req.body.artistTellUs
   }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });
};
