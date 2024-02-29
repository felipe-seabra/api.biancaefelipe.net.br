import { newGiftSchema } from './schema'

import { Response, NextFunction } from 'express'
import { IAuthRequest } from '../interfaces'

export default class GiftMiddleware {
  static validateNewGift = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = req
      await newGiftSchema.validateAsync(body)
      next()
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ message: 'Some required fields are missing' })
    }
  }

  static validateUpdateGift = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = req
      await newGiftSchema.validateAsync(body)
      next()
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ message: 'Some required fields are missing' })
    }
  }
}
