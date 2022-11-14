// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'product_id',
});

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag,{
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
