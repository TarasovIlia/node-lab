import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm' 
import { Games } from './model/Products'
import logger from './logger'
const app = express()
const config = require('config')

const HOST = config.get('host')
const PORT = config.get('port') || 4200
const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)

const game = new Games()
game.display_name = 'Call of Duty Black Ops 4';
game.price = 44;
game.total_rating = 8;
game.category = 'Action';
game.create_at = new Date(2019,3,3);

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
        Games
      ],
      synchronize: true,
      logging: false
    })
    .then ( async connection => {
        const gamesRepository = connection.getRepository(Games)
      
        const newGame = await gamesRepository.findOne(7)
        if (newGame)
        logger.info(`all game: `, newGame)
      
        
        app.listen(PORT, () => logger.info(`\n\nserver run on port ${localUrl('')}`))
      })

  } catch (error) {
    logger.error(`Unable to connect: ${error}`)
    } 
}

start()

