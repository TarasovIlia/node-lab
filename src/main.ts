import express from 'express'
const app = express()
const config = require('config')
//import mongoose from 'mongoose'

//postreSQL
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:1oviver1@localhost:5432/dvdrental');

// const Product = require('./model/product')
// const Category = require('./model/category')

const HOST = config.get('host')
const PORT = config.get('port') || 4200
const MONGO_URL = config.get('mongoUrl')

const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)


async function start () {
  try {
    const customer =  await db.many('SELECT first_name FROM customer')
    app.listen(PORT, () => console.log(`\n\nserver is listening on ${localUrl('')}`))
    console.log(customer)
  } catch (err) {
  }
}

start()
