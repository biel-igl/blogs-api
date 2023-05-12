module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('blog_posts', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    published: {
      type: Sequelize.DATE
    },
    updated: {
      type: Sequelize.DATE
    },
   });
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
