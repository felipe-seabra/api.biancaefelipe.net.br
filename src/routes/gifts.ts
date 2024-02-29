import express from 'express'

import Auth from '../middlewares/authMiddleware'
import GiftMiddleware from '../middlewares/giftMiddleware'
import GiftController from '../controllers/giftController'

export const gift = express.Router()

gift.get('/', GiftController.findAllGifts)
gift.get('/:id', GiftController.findById)
gift.post(
  '/',
  Auth.authToken,
  GiftMiddleware.validateNewGift,
  GiftController.createNewGift,
)
gift.put(
  '/:id',
  Auth.authToken,
  GiftMiddleware.validateUpdateGift,
  GiftController.updateById,
)
gift.delete('/:id', Auth.authToken, GiftController.deleteById)
