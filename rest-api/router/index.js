const router = require("express").Router()
import { authController } from '../controllers'

router.post('/register', authController.register)