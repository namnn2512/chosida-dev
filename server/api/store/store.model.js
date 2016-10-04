'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: { type: String, required: true},
  info: String,
  active: Boolean,
  address: String,
  cityId: Number,
  imgUrl: String,
  userId: { type: String, required: true},
  categoryId: Number,
  parentCategoryId:Number,
  createDate: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Store', StoreSchema);
