/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id:
        {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      modelName: 'user',
      underscored: true,
      tableName: 'users',
      timestamps: false
    },
  );
  User.associate = (models) => {
    User.hasMany(models.BlogPost, 
      {
        foreignKey:'userId', as: 'posts'
      })
  }
  return User;
};
  
  module.exports = UserModel;