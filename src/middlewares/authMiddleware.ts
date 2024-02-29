import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces'

import Jwt from '../utils/jwt'

interface AuthRequest extends Request {
  user?: IUser
}

export default class Auth {
  static authToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization) res.status(401).json({ message: 'Token not found' })

    try {
      if (authorization) {
        Jwt.decodeToken(authorization)
        return next()
      }
    } catch (err) {
      res.status(401).json({ message: 'Expired or invalid token' })
    }
  }
}
