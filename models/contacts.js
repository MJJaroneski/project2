module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      funfact: DataTypes.TEXT,
      findout: DataTypes.TEXT
    });
    return Contacts;
  };
  