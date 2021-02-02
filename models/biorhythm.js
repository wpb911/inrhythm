
module.exports = function(sequelize, DataTypes) {
    var Biorhythm = sequelize.define("biorhythm", {
        physical: DataTypes.STRING,
        emotional: DataTypes.STRING,
        intellectual: DataTypes.STRING,
    });
    return Biorhythm;
  };

