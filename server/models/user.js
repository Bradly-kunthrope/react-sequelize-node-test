const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  User.hook('beforeValidate', function(user, options){
    if (!user.changed('password')) {
      return sequelize.Promise.reject("not modified");
    }
      return bcrypt.genSaltAsync(saltRounds).then(function (salt) 
    {
      return bcrypt.hashAsync(user.password, salt, null);
    }).then(function (hash) {
      user.setDataValue('password', hash);
    }).catch(function (err) {
      return sequelize.Promise.reject(err);
    });
  })
  User.associate = (models) => {
    User.hasMany(models.CLReserve, {
      foreignKey: 'userId',
      as: 'CLReserves',
    });
  };
  return User;
};