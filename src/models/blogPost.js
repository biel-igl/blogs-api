/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const blogPostModel = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('blogPosts', {
        id:
          {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: 
          {
            type: DataTypes.STRING,
            foreignKey: true,
            references:
              {
                model: 'users',
                key: 'id'
              }
          },
        published: DataTypes.STRING,
        updated: DataTypes.STRING
      },
      {
        modelName: 'blogPosts',
        underscored: true,
        tableName: 'blog_posts',
        timestamps: false
      },
    );
    BlogPosts.associate = (models)=>{
        BlogPosts.belongsTo(models.user,
            {
                foreignKey: 'userId', as: 'users'
            })
    }
    return BlogPosts;
  };
    
module.exports = blogPostModel;