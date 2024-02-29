import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken'
import { Payload } from '../interfaces'

const JWT_SECRET: string = process.env.JWT_SECRET || 'MySecretPassword'

const jwtConfig: SignOptions & VerifyOptions = {
  expiresIn: '30m',
  algorithm: 'HS256',
}

export default class Jwt {
  static generateToken = (payload: Payload): string => {
    try {
      return jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig)
    } catch (err) {
      throw new Error('Failed to generate token')
    }
  }

  static decodeToken = (token: string) => {
    if (!token) {
      throw new Error('Undefined Token')
    }

    try {
      const result = jwt.verify(token, JWT_SECRET)
      return result
    } catch (err) {
      throw new Error('Invalid signature')
    }
  }
}
