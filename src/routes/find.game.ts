import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Router } from 'express';
import logger from '../logger';
const router = Router()

router.get('/find', async function(req,res) {
    try {
        //const {id} = req.body
        const target = 4
        const params = typeof target === 'number' ? 'id' : 'display_name'
        const creteria = typeof target === 'number' ? {id : target} : {display_name : target}
        const game = await getRepository(Games)
            .createQueryBuilder('games')
            .where(`games.${params} = :${params}`, creteria)
            .getOne();
        res.send(game)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

