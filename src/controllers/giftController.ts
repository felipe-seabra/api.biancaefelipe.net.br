import { Request, Response } from 'express'

import { mapError, errorMap } from '../utils/errorMap'
import giftService from '../services/giftService'

const findAllGifts = async (_req: Request, res: Response) => {
  const { type, message } = await giftService.findAllGifts()

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(200).json(message)
}

const findById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { type, message } = await giftService.findById(id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(200).json(message)
}

const createNewGift = async (req: Request, res: Response) => {
  const { body } = req
  const { type, message } = await giftService.createNewGift(body)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(201).json(message)
}

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
  const { type, message } = await giftService.updateById(body, id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(201).json(message)
}

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { type, message } = await giftService.deleteById(id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(204).json(message)
}

export default { findAllGifts, findById, createNewGift, updateById, deleteById }
