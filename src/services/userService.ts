import bcrypt from 'bcrypt'
import Jwt from '../utils/jwt'
import { prismaClient } from '../database'

import { IUser, Payload } from '../interfaces'

export default class UserService {
  static createNewUser = async (user: IUser) => {
    try {
      const salt = await bcrypt.genSalt(10)

      const hashedPassword = await bcrypt.hash(user.password, salt)

      const userWithHashedPassword = {
        ...user,
        password: hashedPassword,
      }

      await prismaClient.user.create({
        data: { ...userWithHashedPassword },
      })
      const payload: Payload = {
        dataValues: {
          name: user.name,
          email: user.email,
        },
      }

      const token = Jwt.generateToken(payload)
      return { type: null, message: token }
    } catch (error) {
      console.log(error)
      return {
        type: 'EMAIL_ALREADY_REGISTERED',
        message: 'Email already registered',
      }
    }
  }

  static fildAllUsers = async () => {
    try {
      const users = await prismaClient.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          isAdmin: true,
          isMaster: true,
          createdAt: true,
          updatedAt: true,
        },
      })
      if (users.length === 0)
        return { type: 'USER_NOT_FOUND', message: 'No user found' }

      return { type: null, message: users }
    } catch (err) {
      return { type: 'USER_NOT_FOUND', message: 'No user found' }
    }
  }

  static findById = async (id: string) => {
    try {
      const result = await prismaClient.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          isAdmin: true,
          isMaster: true,
          createdAt: true,
          updatedAt: true,
        },
      })

      return { type: null, message: result }
    } catch (err) {
      return { type: 'USER_NOT_FOUND', message: 'User does not exists' }
    }
  }

  static updateById = async (props: IUser, id: string) => {
    try {
      await prismaClient.user.update({
        where: { id },
        data: { ...props },
      })

      return { type: null, message: 'User updated successfully' }
    } catch (err) {
      return { type: 'USER_NOT_FOUND', message: 'User does not exists' }
    }
  }

  static deleteById = async (id: string) => {
    try {
      await prismaClient.user.delete({
        where: { id },
      })

      return { type: null, message: 'User successfully deleted' }
    } catch (err) {
      return { type: 'USER_NOT_FOUND', message: 'User does not exists' }
    }
  }
}
