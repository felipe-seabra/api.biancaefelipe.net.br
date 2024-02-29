import bcrypt from 'bcrypt'
import Jwt from '../utils/jwt'
import { prismaClient } from '../database'

import { Payload } from '../interfaces'

export default class LoginService {
  static login = async (email: string, password: string) => {
    if (!(email && password)) {
      return {
        type: 'BAD_REQUEST',
        message: 'Some required fields are missing',
      }
    }

    try {
      const user = await prismaClient.user.findUnique({
        where: { email },
      })
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
          return { type: 'UNAUTHORIZED', message: 'Invalid password' }
        }
      }
      if (!user) return { type: 'UNAUTHORIZED', message: 'Invalid fields' }

      const { isMaster, isAdmin, name, id } = user

      const payload: Payload = {
        dataValues: {
          name: user.name,
          email: user.email,
        },
      }
      const token = Jwt.generateToken(payload)
      return {
        type: null,
        message: { token, isAdmin, name, email, id, isMaster },
      }
    } catch (error) {
      return { type: 'UNAUTHORIZED', message: 'Invalid fields' }
    }
  }
}
