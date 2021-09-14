const mongoose = require('mongoose')
const { Schema } = mongoose;


const categorySchema = new Schema({
    displayName: String,
    createdAt: Date,
})

const productSchema = new Schema({
    displayName: String,
    category: categorySchema,
    createdAt: Date,
    totalRating: Number,
    price: Number,
})

const product = mongoose.model('products', productSchema)
const category = mongoose.model('catergry', categorySchema)

module.exports = product, category;