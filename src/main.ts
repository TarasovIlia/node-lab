import express from "express";
import mongoose from "mongoose";
const app = express();
const Product = require('./schema');
const Category = require('./schema')

const host = 'http://localhost:'
const port = process.env.PORT || 4200

const localUrl = (url : String) => url ?  `${host}${port}/${url}` : `${host}${port}`

const newGame = new Product({
    displayName: "test",
    category: new Category({displayName:"TEST"}),
    createdAt: Date.now(),
    totalRating: 999,
    price: 1
})

async function start() {
    try {
        await mongoose.connect('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products')
        console.log('\n\nConnected');
        const game = await Product.find({})
        await newGame.save();
        app.get('/', (req,res) => {
            res.send(`<a href=${localUrl("products")}>to products<a>`);
        })
        app.get('/products', (req,res) => {
            res.send(`<h2>All game: ${game[0].displayName}<h2/>`);
        })
        app.listen(port, () => {
            console.log(`\n\nserver is listening on ${localUrl('')}\n\nserver is listening on ${localUrl('products')}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()
