module.exports = function(sequelize, DataTypes) {
    const Compatibility = sequelize.define("Compatibility", {        
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        birth_date:  {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        day: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        month: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Compatibility.associate = (models) => {
        // We're saying that a Biorhythm should belong to a User
        // A Biorhythm can't be created without a User due to the foreign key constraint
        // Constaint created automatically by this sequelize associate function
        Compatibility.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          },
        });
      };


    return Compatibility;
  };