import { Request, Response } from 'express'
import { mapError, errorMap } from '../utils/errorMap'
import loginService from '../services/loginService'

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const { type, message } = await loginService.validateLogin(email, password)

  if (type)
    return res.status(mapError(type as keyof typeof errorMap)).json({ message })

  res.status(200).json(message)
}

export default { login }
