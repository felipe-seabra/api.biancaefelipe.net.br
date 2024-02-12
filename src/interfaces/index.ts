import { Request } from 'express'
export interface IUser {
  name: string
  email: string
  password: string
  isAdmin: boolean
  isMaster: boolean
}

export interface IGift {
  name: string
  description: string
  amount: number
  available: boolean
  price: number
  imageUrl: string
  paymentMethod: string
}

export interface IAuthRequest extends Request {
  user?: IUser
}

export interface Payload {
  dataValues: {
    name: string
    email: string
  }
}
