module.exports = {
  /**
  *
  * @param {import('sequelize').QueryInterface} queryInterface
  * @param {*} Sequelize
  */
 up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('posts_categories', {
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'blog_posts',
        key: 'id'
      }
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      }
   }
  });
 },

 down: async (queryInterface, __Sequelize) => {
   await queryInterface.dropTable('posts_categories');
 }
};
