import { getRepository } from 'typeorm';
import { Categories } from '../model/Categories'
import { Router } from 'express';
const router = Router()



router.post('/add', async function(req,res) {
    try {
        const category = new Categories()
        category.category = 'Action';
        
        const categoryRepository = getRepository(Categories)
        await categoryRepository.save(category)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

