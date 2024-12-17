import express from 'express'
import { userRegister } from '../controllers/authController.mjs'


const router = express.Router()

router.post('/register', userRegister)

export {router}