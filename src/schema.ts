import mongoose from 'mongoose'
const { Schema } = mongoose

interface Category {
  displayName: String;
  createdAt: Date;
}

const categorySchema = new Schema({
  displayName: String,
  createdAt: Date
})

interface Production {
  displayName: String;
  category: Category;
  createdAt: Date;
  totalRating: Number;
  price: Number;
}

const productSchema = new Schema({
  displayName: String,
  category: categorySchema,
  createdAt: Date,
  totalRating: Number,
  price: Number
})

const product = mongoose.model('products', productSchema)
const category = mongoose.model('catergry', categorySchema);

(module.exports = product), category
