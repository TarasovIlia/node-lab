import { getRepository } from 'typeorm';
import { Games } from '../model/Games'
import { Categories } from '../model/Categories';
import { Router } from 'express';
import logger from '../logger'
const router = Router()

router.get('/add', async function(req,res) {
    try {
        const gameRepository = getRepository(Games)
        const categoryRepository = getRepository(Categories)
        logger.info(`Games added`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

