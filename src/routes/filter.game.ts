import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/filter', async function(req,res) {
    try {
        //const {target} = req.body
        const target = {hig : 40, min : 30}
        // const params = typeof target === 'number' ? 'id' : 'display_name'
        // const creteria = typeof target === 'number' ? {id : target} : {display_name : target}
        const game = await getRepository(Games)
            .createQueryBuilder('games')
            .where(`games.price > :minPrice`, {minPrice : target.min} )
            .andWhere(`games.price < :maxPrice`, {maxPrice : target.hig} )
            .getMany();
        res.send(game)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

