import { getRepository } from 'typeorm';
import { Games } from '../model/Products'
import { Router } from 'express';
const router = Router()


router.get('/get/all', async function(req,res) {
    try {
        const gameRepository = getRepository(Games)
        const allGame = await gameRepository.find()
        res.send(allGame)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

//const game = new Games()
// game.display_name = 'The Witcher';
// game.price = 56;
// game.total_rating = 10;
// game.category = 'Action';
// game.create_at = new Date(2013,3,3);