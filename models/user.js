// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
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
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:  {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        birth_date:  {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        bio_date:  {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }, 
        day:  {
            type: DataTypes.STRING,
            allowNull: true,
        },
        month:  {
            type: DataTypes.STRING,
            allowNull: true,
        },
        year:  {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });


    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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