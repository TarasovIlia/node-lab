import { getRepository } from 'typeorm';
import { Categories } from '../model/Categories'
import { Router } from 'express';
import logger from '../logger';
const router = Router()


router.get('/get/all', async function(req,res) {
    try {
        const categoryRepository = getRepository(Categories)
        const allCategory = await categoryRepository.find()
        res.send(allCategory)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router