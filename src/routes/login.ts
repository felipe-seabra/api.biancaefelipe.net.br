import express from 'express'

import LoginController from '../controllers/loginController'

export const login = express.Router()

login.post('/', LoginController.login)
