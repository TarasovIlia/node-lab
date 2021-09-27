import mongoose from 'mongoose'
const Category =  require('./category') 
const { Schema } = mongoose


interface Production {
  displayName: String;
  category: typeof Category;
  createdAt: Date;
  totalRating: Number;
  price: Number;
}

const Production = new Schema({
  displayName: String,
  category: Category,
  createdAt: Date,
  totalRating: Number,
  price: Number
})

const product = mongoose.model('products', Production)

module.exports = product
