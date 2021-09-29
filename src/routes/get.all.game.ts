import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/get/all', async function(req,res) {
    try {
        const gameRepository = await getRepository(Games)
            .createQueryBuilder('games')
            .getMany();
        res.send(gameRepository)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

