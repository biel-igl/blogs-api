/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const postCategorieModels = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('postCategories', {
        postId: 
          {
            type: DataTypes.STRING,
            foreignKey: true,
            references:
              {
                model: 'blogPosts',
                key: 'id'
              }
          },
        categoryId: 
          {
            type: DataTypes.STRING,
            foreignKey: true,
            references:
                {
                model: 'categories',
                key: 'id'
                }
          }
      },
      {
        underscored: true,
        tableName: 'posts_categories',
        timestamps: false
      },
    );
    PostCategories.associate = (models)=>{
        const {blogPosts, categories } = models;
        blogPosts.belongsToMany(categories, {through: PostCategories, foreignKey: 'postId', as: 'categories'})
        categories.belongsToMany(blogPosts, {through: PostCategories, foreignKey: 'categoryId', as: 'blogPosts'})
    }
    return PostCategories;
  };
    
module.exports = postCategorieModels;