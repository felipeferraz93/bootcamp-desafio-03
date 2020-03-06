module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('avatars', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowFull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowFull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('avatars');
  },
};
