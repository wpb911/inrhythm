module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING, 
        day: DataTypes.STRING,
        month: DataTypes.STRING,
        year: DataTypes.STRING,
    });
    return User;
  };