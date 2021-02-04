
module.exports = function(sequelize, DataTypes) {
    const Biorhythm = sequelize.define("Biorhythm", {
        physical:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emotional: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        intellectual: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });


    Biorhythm.associate = (models) => {
        // We're saying that a Biorhythm should belong to a User
        // A Biorhythm can't be created without a User due to the foreign key constraint
        // Constaint created automatically by this sequelize associate function
        Biorhythm.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };





    return Biorhythm;
  };


