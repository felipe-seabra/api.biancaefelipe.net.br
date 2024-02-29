import { Request, Response } from 'express'

import { mapError, errorMap } from '../utils/errorMap'
import GiftService from '../services/giftService'

export default class GiftController {
  static findAllGifts = async (_req: Request, res: Response) => {
    const { type, message } = await GiftService.findAllGifts()

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await GiftService.findById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static createNewGift = async (req: Request, res: Response) => {
    const { body } = req
    const { type, message } = await GiftService.createNewGift(body)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(201).json(message)
  }

  static updateById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    const { type, message } = await GiftService.updateById(body, id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(201).json(message)
  }

  static deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await GiftService.deleteById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(204).json(message)
  }
}
