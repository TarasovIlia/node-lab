import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/get/all', async function(req,res) {
    try {
        const page = 1
        const PAGE_SIZE = 10;
        const skip = (page - 1) * PAGE_SIZE;
        const gameRepository = await getRepository(Games)
            .createQueryBuilder('games')
            .take(PAGE_SIZE)
            .skip(skip)
            .getMany();
        res.send(gameRepository)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

