import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/get/all', async function(req,res) {
    try {
        const page = req.query.page ? req.query.page : 1
        const PAGE_SIZE = 3;
        const skip = ((+page) - 1) * PAGE_SIZE;
        const gameRepository = await getRepository(Games)
            .createQueryBuilder('games')
            .take(PAGE_SIZE)
            .skip(skip)
            .getMany();
        res.status(201).json(gameRepository)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

