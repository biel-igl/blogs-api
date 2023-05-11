const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
        underscored: true,
        tableName: 'users',
        timestamps: false
    });
    return User;
  };
  
  module.exports = UserModel;