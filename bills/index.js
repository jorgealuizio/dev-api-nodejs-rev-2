import express from 'express'

import create from './services/create'
import remove from './services/remove'
import list from './services/list'

const router = express.Router()

//http://localhost:3000/bills/
router.get('/', list)
//http://localhost:3000/bills/
router.post('/', create)
//htpp://localhost:3000/bills/14537894732819EW
router.delete('/:id', remove)

export default router