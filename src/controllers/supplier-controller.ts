import { Request, Response } from 'express'

import { mapError, errorMap } from '../utils/errorMap'
import SupplierService from '../services/supplier-service'

export default class SupplierController {
  static findAllSuppliers = async (_req: Request, res: Response) => {
    const { type, message } = await SupplierService.findAllSupplier()

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static findById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await SupplierService.findById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }

  static createNewSupplier = async (req: Request, res: Response) => {
    const { body } = req
    const { type, message } = await SupplierService.createNewSupplier(body)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(201).json(message)
  }

  static deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { type, message } = await SupplierService.deleteById(id)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(204).json(message)
  }
}
