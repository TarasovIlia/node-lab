import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm' 
import { Games } from './model/Products'
import { Categories } from './model/Categories'

const app = express()
const config = require('config')
const HOST = config.get('host')
const PORT = config.get('port') || 4200
const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)

app.use('/api/products', require('./routes/get.all.game'))
app.use('/api/products', require('./routes/get.game'))
app.use('/api/categories', require('./routes/get.all.categories'))
app.use('/api/categories', require('./routes/add.categories'))

function start() {
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1oviver1',
    database: 'products',
    entities: [
      Games,
      Categories
    ],
    synchronize: true,
    logging: false
  })
  app.listen(PORT, () => console.log(`\n\nserver run on port ${localUrl('')}`))
}

start()

