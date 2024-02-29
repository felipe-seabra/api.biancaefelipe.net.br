import { newUserSchema, updateUserSchema } from './schema'

import { Response, NextFunction } from 'express'
import { IAuthRequest } from '../interfaces'
import { ValidationError } from 'joi'

export default class UserMiddleware {
  static validateNewUser = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = req
      await newUserSchema.validateAsync(body)
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

  static validateUpdateUser = async (
    req: IAuthRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { body } = req
      await updateUserSchema.validateAsync(body)
      next()
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ message: 'Some required fields are missing' })
    }
  }
}
