module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CLReserves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      r_date_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      r_date_end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      classroom_cl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subject_taught: {
        type: Sequelize.STRING,
        allowNull: false
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year_level_taught: {
        type: Sequelize.INTEGER,
        isIn: [['1', '2', '3', '4']]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CLReserves');
  }
};