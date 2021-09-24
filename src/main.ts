import express from 'express'
import mongoose from 'mongoose'
const app = express()
const Product = require('../model/product')
const Category = require('../model/category')
const config = require('config')

const HOST = config.get('host')
const PORT = config.get('post') || 4200
const MONGO_URL = config.get('mongoUrl')

const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)

const newGame = new Product({
  displayName: 'test',
  category: new Category({ displayName: 'TEST' }),
  createdAt: Date.now(),
  totalRating: 99,
  price: 1
})

async function start () {
  try {
    await mongoose.connect(MONGO_URL)
    console.log('\n\nConnected')
    const game = await Product.find({})
    app.get('/', (req, res) => {
      res.send(`<a href=${localUrl('products')}>to products<a>`)
    })
    app.get('/products', (req, res) => {
      res.send(`<h2>All game: ${game[0].displayName}<h2/>`)
    })
    app.listen(PORT, () => console.log(`\n\nserver is listening on ${localUrl('')}\n\nserver is listening on ${localUrl('products')}`))
  } catch (err) {
    console.log(err.message)
  }
}

start()