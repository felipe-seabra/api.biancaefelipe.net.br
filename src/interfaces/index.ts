import { Request } from 'express'
export interface IUser {
  name: string
  email: string
  password: string
  isAdmin: boolean
  isMaster?: boolean
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

export interface IMessageForTheCouple {
  name: string
  email: string
  message: string[]
}

export interface ISupplier {
  name: string
  phone: string
  email?: string
  service: string
  contractedValue: number
  amountPaid: number
  observation: string[]
  opened: boolean
}

export interface IGuest {
  name: string
  parentage: string
  paying: boolean
  confirmed: boolean
  giftId?: string
}
