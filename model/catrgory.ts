import mongoose from 'mongoose'
const { Schema } = mongoose

interface Category {
  displayName: String;
  createdAt: Date;
}

const Category = new Schema({
  displayName: String,
  createdAt: Date
})

const category = mongoose.model('catergry', Category);

module.exports = category
