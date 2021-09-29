import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Categories } from '../model/Categories';
import { Router } from 'express';
import logger from '../logger'
const router = Router()

// const rpgCategory = new Categories()
// rpgCategory.name = 'RPG'

// const game1 = new Games()
// game1.category = rpgCategory
// game1.display_name = 'TES 5 Skyrim'
// game1.price = 29
// game1.total_rating = 97
// game1.create_at = new Date(2011,11,11)

// const game2 = new Games()
// game2.category = rpgCategory
// game2.display_name = 'The Witcher 3'
// game2.price = 51
// game2.total_rating = 99
// game2.create_at = new Date(2015,5,22)

// const game3 = new Games()
// game3.category = rpgCategory
// game3.display_name = 'Mass Effect Andromeda'
// game3.price = 39
// game3.total_rating = 79
// game3.create_at = new Date(2018,3,5)

// const game4 = new Games()
// game4.category = rpgCategory
// game4.display_name = 'Cyberpunk'
// game4.price = 65
// game4.total_rating = 82
// game4.create_at = new Date(2021,4,8)



router.get('/add', async function(req,res) {
    try {
        const gameRepository = getRepository(Games)
        const categoryRepository = getRepository(Categories)
        // await categoryRepository.save(rpgCategory)
        // await gameRepository.save(game1)
        // await gameRepository.save(game2)
        // await gameRepository.save(game3)
        // await gameRepository.save(game4)
        logger.info(`Games added`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

