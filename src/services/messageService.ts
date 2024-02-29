import { prismaClient } from '../database'
import { IMessageForTheCouple } from '../interfaces'

export default class MessageService {
  static findAllMessages = async () => {
    const messages = await prismaClient.messageForTheCouple.findMany()

    if (messages.length === 0) {
      return { type: 'MESSAGE_NOT_FOUND', message: 'No messages found' }
    }
    return { type: null, message: messages }
  }

  static findById = async (id: string) => {
    const result = await prismaClient.messageForTheCouple.findUnique({
      where: { id },
    })
    if (!result)
      return { type: 'MESSAGE_NOT_FOUND', message: 'No messages found' }
    return { type: null, message: result }
  }

  static createNewMessage = async (message: IMessageForTheCouple) => {
    try {
      await prismaClient.messageForTheCouple.create({
        data: { ...message },
      })

      return { type: null, message: 'Message registered successfully' }
    } catch (err) {
      return {
        type: 'MESSAGE_ALREADY_REGISTERED',
        message: 'message already registered',
      }
    }
  }

  static deleteById = async (id: string) => {
    try {
      await prismaClient.messageForTheCouple.delete({
        where: { id },
      })

      return { type: null, message: 'Message successfully deleted' }
    } catch (err) {
      return { type: 'MESSAGE_NOT_FOUND', message: 'No message found' }
    }
  }
}
