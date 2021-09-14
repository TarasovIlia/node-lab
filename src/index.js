const express = require('express');
const mongoose = require('mongoose')
const { Schema } = mongoose;

const app = express();
const host = 'http://localhost:'
const port = process.env.PORT || 4200

const localUrl = url => url ?  `${host}${port}/${url}` : `${host}${port}`

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

const Product = mongoose.model('products', productSchema)
const Category = mongoose.model('catergry', categorySchema)

// const newGame = new Product({
//     displayName: "SpongeBob SquarePants: Battle for Bikini Bottom – Rehydrated",
//     category: new Category({displayName:"Adventure"}),
//     createdAt: Date.now(),
//     totalRating: 8,
//     price: 20
// })

async function start() {
    try {
        await mongoose.connect('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products')
        console.log('\n\nConnected');
        const game = await Product.find({})
        //await newGame.save();
        app.get('/', (req,res) => {
            res.send(`<a href=${localUrl("products")}>to products<a>`);
        })
        app.get('/products', (req,res) => {
            res.send(`<h2>All game: ${game}<h2/>`);
        })
        app.listen(port, () => {
            console.log(`\n\nserver is listening on ${localUrl()}\n\nserver is listening on ${localUrl('products')}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()
