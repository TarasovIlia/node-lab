import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/filter', async function(req,res) {
    try {
        const {max, min} = req.query
        console.log(req.query)
        const game = await getRepository(Games)
            .createQueryBuilder('games')
            .where(`games.price > :minPrice`, {minPrice : min} )
            .andWhere(`games.price < :maxPrice`, {maxPrice : max} )
            .getMany();
        res.status(201).json(game)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

