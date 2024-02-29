import { prismaClient } from '../database'
import { IGift } from '../interfaces'

export default class GiftService {
  static findAllGifts = async () => {
    const gifts = await prismaClient.gifts.findMany()

    if (gifts.length === 0)
      return { type: 'GIFT_NOT_FOUND', message: 'No gift found' }
    return { type: null, message: gifts }
  }

  static findById = async (id: string) => {
    const result = await prismaClient.gifts.findUnique({
      where: { id },
    })
    if (!result) return { type: 'GIFT_NOT_FOUND', message: 'No gift found' }
    return { type: null, message: result }
  }

  static createNewGift = async (gift: IGift) => {
    try {
      await prismaClient.gifts.create({
        data: { ...gift },
      })

      return { type: null, message: 'Gift registered successfully' }
    } catch (error) {
      return {
        type: 'GIFT_ALREADY_REGISTERED',
        message: 'Gift already registered',
      }
    }
  }

  static updateById = async (props: IGift, id: string) => {
    try {
      await prismaClient.gifts.update({
        where: { id },
        data: { ...props },
      })

      return { type: null, message: 'Gift updated successfully' }
    } catch (error) {
      return { type: 'GIFT_NOT_FOUND', message: 'No gift found' }
    }
  }

  static deleteById = async (id: string) => {
    try {
      await prismaClient.gifts.delete({
        where: { id },
      })

      return { type: null, message: 'Gift successfully deleted' }
    } catch (error) {
      return { type: 'GIFT_NOT_FOUND', message: 'No gift found' }
    }
  }
}
