
module.exports = function(sequelize, DataTypes) {
    var Biorhythm = sequelize.define("biorhythm", {
        userID: DataTypes.INTEGER,
        physical: DataTypes.STRING,
        emotional: DataTypes.STRING,
        intellectual: DataTypes.STRING,
    });
    return Biorhythm;
  };

