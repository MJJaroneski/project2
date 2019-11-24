module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
      artistName: DataTypes.TEXT,
      artistEmail: DataTypes.TEXT,
      artistPhone: DataTypes.TEXT,
      artistHome: DataTypes.TEXT,
      artistAvailability: DataTypes.TEXT,
      artistGenre: DataTypes.TEXT,
      artistFB: DataTypes.TEXT,
      artistEPK: DataTypes.TEXT,
      artistTellUs: DataTypes.TEXT
    });
    return Artist;
  };
  