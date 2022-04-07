'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull : false,
        type: Sequelize.STRING,
        unique: true
      },
      username: {
        allowNull : false,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      biography: {
        allowNull : true,
        type: Sequelize.STRING
      },
      isAdmin: {
        allowNull : false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};