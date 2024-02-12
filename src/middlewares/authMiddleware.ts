import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces'

import jwt from '../utils/jwt'

interface AuthRequest extends Request {
  user?: IUser
}

const authToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) res.status(401).json({ message: 'Token not found' })

  try {
    if (authorization) {
      const user = jwt.decodeToken(authorization)
      req.user = { ...user }
      return next()
    }
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' })
  }
}

export default { authToken }
