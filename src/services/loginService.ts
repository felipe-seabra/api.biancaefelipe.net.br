import bcrypt from 'bcrypt'
import jwt from '../utils/jwt'
import { prismaClient } from '../database'

import { Payload } from '../interfaces'

const validateLogin = async (email: string, password: string) => {
  if (!(email && password)) {
    return {
      type: 'MISSING_FIELDS',
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
        return { type: 'INVALID_PASSWORD', message: 'Invalid password' }
      }
    }
    if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' }

    const { isAdmin, name, id } = user

    const payload: Payload = {
      dataValues: {
        name: user.name,
        email: user.email,
      },
    }
    const token = jwt.generateToken(payload)
    return { type: null, message: { token, isAdmin, name, email, id } }
  } catch (error) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' }
  }
}

export default { validateLogin }
