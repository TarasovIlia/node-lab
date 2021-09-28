import { getRepository } from 'typeorm';
import { Categories } from '../model/Categories'
import { Router } from 'express';
const router = Router()


router.get('/get/all', async function(req,res) {
    try {
        const categoryRepository = getRepository(Categories)
        const allGame = await categoryRepository.find()
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