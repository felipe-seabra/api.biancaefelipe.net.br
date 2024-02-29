import express from 'express'

import MessageController from '../controllers/messageController'
import Auth from '../middlewares/authMiddleware'

export const message = express.Router()

message.get('/', MessageController.findAllMessages)
message.get('/:id', MessageController.findById)
message.post('/', MessageController.createNewUserMessage)
message.delete('/:id', Auth.authToken, MessageController.deleteById)
