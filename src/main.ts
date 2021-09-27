import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm' 
import { Games } from './model/Products'
const app = express()
const config = require('config')

const HOST = config.get('host')
const PORT = config.get('port') || 4200
const localUrl = (url: String) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`)

const game = new Games()
game.display_name = 'The Witcher';
game.price = 56;
game.total_rating = 10;
game.category = 'Action';
game.create_at = new Date(2013,3,3);

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
      
        await gamesRepository.save(game)
        const allGame = await gamesRepository.find()
        console.log(allGame)
      
        
        app.listen(PORT, () => console.log(`\n\nserver run on port ${localUrl('')}`))
      })
      
  } catch (error) {
    console.log(error)
  }
}

start()

