import { Request, Response } from 'express'

import { mapError, errorMap } from '../utils/errorMap'
import MessageService from '../services/messageService'

export default class MessageController {
  static findAllMessages = async (_req: Request, res: Response) => {
    const { type, message } = await MessageService.findAllMessages()

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await MessageService.findById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static createNewUserMessage = async (req: Request, res: Response) => {
    const { body } = req
    const { type, message } = await MessageService.createNewMessage(body)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(201).json(message)
  }

  static deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await MessageService.deleteById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(204).json(message)
  }
}
