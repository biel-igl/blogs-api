/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

const CategoriesModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('categories', {
      id:
        {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
      name: DataTypes.STRING
    },
    {
      underscored: true,
      tableName: 'categories',
      timestamps: false
    },
  );
  return Category;
};
  
  module.exports = CategoriesModel;