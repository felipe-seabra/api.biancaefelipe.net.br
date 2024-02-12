import { Request, Response } from 'express'

import { mapError, errorMap } from '../utils/errorMap'
import userService from '../services/userService'
import { IAuthRequest } from '../interfaces'

const fildAllUsers = async (_req: Request, res: Response) => {
  const { type, message } = await userService.fildAllUsers()
  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(200).json(message)
}

const findById = async (_req: Request, res: Response) => {
  const { id } = _req.params
  const { type, message } = await userService.findById(id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(200).json(message)
}

const createNewUser = async (req: IAuthRequest, res: Response) => {
  const { body } = req
  const { type, message } = await userService.createNewUser(body)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(201).json(message)
}

const updateById = async (req: IAuthRequest, res: Response) => {
  const { id } = req.params
  const { body } = req

  const { type, message } = await userService.updateById(body, id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(201).json(message)
}

const deleteById = async (req: IAuthRequest, res: Response) => {
  const { id } = req.params
  const { type, message } = await userService.deleteById(id)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(204).json(message)
}

export default { fildAllUsers, findById, createNewUser, updateById, deleteById }
