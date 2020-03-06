module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('problems', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      delivery_id: {
        type: Sequelize.INTEGER,
        references: { model: 'deliveries', key: 'id' },
        onUptade: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
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
    return queryInterface.dropTable('problems');
  },
};
