import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm' 
import { Games } from './model/Games'
import { Categories } from './model/Categories'
import logger from './logger'

const app = express()
const config = require('config')
const HOST = config.get('host')
const PORT = config.get('port') || 4200
const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)

app.use('/api/categories', require('./routes/get.all.categories'))
app.use('/api/games', require('./routes/get.all.game'))
app.use('/api/games', require('./routes/add'))
app.use('/api/games', require('./routes/find.game'))

async function start() {
  try {
    await createConnection({
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
    app.listen(PORT, () => logger.info(`server run on port ${localUrl('')}`))
  } catch (error) {
    logger.error(`Unable to connect: ${error}`)
    } 
}
start()

