import express from 'express'

import Auth from '../middlewares/authMiddleware'
import UserMiddleware from '../middlewares/userMiddleware'
import UserController from '../controllers/userController'

export const user = express.Router()

user.get('/', Auth.authToken, UserController.fildAllUsers)
user.get('/:id', Auth.authToken, UserController.findById)
user.post(
  '/',
  Auth.authToken,
  UserMiddleware.validateNewUser,
  UserController.createNewUser,
)
user.put(
  '/:id',
  Auth.authToken,
  UserMiddleware.validateUpdateUser,
  UserController.updateById,
)
user.delete('/:id', Auth.authToken, UserController.deleteById)
