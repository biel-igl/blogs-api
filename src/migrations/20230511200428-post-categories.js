module.exports = {
  /**
  *
  * @param {import('sequelize').QueryInterface} queryInterface
  * @param {*} Sequelize
  */
 up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('post_categorie', {
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
   published: {
     type: Sequelize.DATE
   },
   updated: {
     type: Sequelize.DATE
   },
  });
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('post_categorie');
 }
};
