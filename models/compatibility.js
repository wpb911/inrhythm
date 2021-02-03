module.exports = function(sequelize, DataTypes) {
    var Compatibility = sequelize.define("compatibility", {
        userID: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        day: DataTypes.STRING,
        month: DataTypes.STRING,
        year: DataTypes.STRING,
    });
    return Compatibility;
  };