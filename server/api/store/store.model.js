'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  address: String,
  cityId: int,
  imgUrl: String,
  userId: String,
  categoryId: int,
  parentCategoryId:int,
  createDate: date
});

module.exports = mongoose.model('Store', StoreSchema);