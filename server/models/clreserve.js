module.exports = (sequelize, DataTypes) => {

  const CLReserve = sequelize.define('CLReserve', {
    r_date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    r_date_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    classroom_cl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject_taught: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year_level_taught: {
      type: DataTypes.INTEGER,
      isIn: [['1', '2', '3', '4']]
    },
  });
  
  CLReserve.associate = (models) => {
    CLReserve.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return CLReserve;
};