import {Router} from 'express'
import { createUser, getUserById } from '../controllers/users.controller.js'

const router =Router()

router.get('/users/:id', getUserById)
router.post('/users', createUser)

export default router