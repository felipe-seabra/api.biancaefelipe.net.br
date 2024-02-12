import { newGiftSchema } from './schema'

import { Response, NextFunction } from 'express'
import { IAuthRequest } from '../interfaces'

const validateNewGift = async (
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
    return res.status(400).send({ message: 'Some required fields are missing' })
  }
}

const validateUpdateGift = async (
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
    return res.status(400).send({ message: 'Some required fields are missing' })
  }
}

export default { validateNewGift, validateUpdateGift }
