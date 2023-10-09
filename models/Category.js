const { Model, DataTypes } = require('sequelize');
const Product = require('./Product');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // This enables cascade delete
});

module.exports = Category;
