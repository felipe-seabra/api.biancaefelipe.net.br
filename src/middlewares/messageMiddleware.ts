import { newMessageSchema } from './schema'

import { Response, NextFunction } from 'express'
import { ValidationError } from 'joi'
import { IAuthRequest } from '../interfaces'

export default class MessageMiddleware {
  static validateNewMessage = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = req
      await newMessageSchema.validateAsync(body)
      next()
    } catch (err) {
      console.error(err)
      if (err instanceof ValidationError) {
        return res
          .status(400)
          .send({ message: 'Some required fields are missing' })
      }
      return res.status(409).send({ message: 'Email already registered' })
    }
  }
}
