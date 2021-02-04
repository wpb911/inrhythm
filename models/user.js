module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:  {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        day:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        month:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year:  {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.associate = (models) => {
        // Associating User with Biorhythm
        // When a User is deleted, also delete any associated Biorhythms
        User.hasMany(models.Biorhythm, {
          onDelete: 'cascade',
        });
      };


      User.associate = (models) => {
        // Associating User with Biorhythm
        // When a User is deleted, also delete any associated Biorhythms
        User.hasMany(models.Compatibility, {
          onDelete: 'cascade',
        });
      };

    return User;
  };