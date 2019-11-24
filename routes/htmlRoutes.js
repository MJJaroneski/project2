var path = require("path");
var db = require("../models");

module.exports = function(app) {
  app.get("/contact", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });

  app.get("/artistcontact", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/html/artistcontact.html"));
  });
  
  app.get("/about", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/html/about.html"));
});

app.get("/calendar", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/html/calendar.html"));
});

app.get("/gateway", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/html/gateway.html"));
});

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/html/about.html"));
});


};

// // Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });

// // Render 404 page for any unmatched routes
// app.get("*", function(req, res) {
//   res.render("404");
// });