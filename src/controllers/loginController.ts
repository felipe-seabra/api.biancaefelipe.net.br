import { Request, Response } from 'express'
import { mapError, errorMap } from '../utils/errorMap'
import LoginService from '../services/loginService'

export default class LoginController {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const { type, message } = await LoginService.login(email, password)

    if (type)
      return res
        .status(mapError(type as keyof typeof errorMap))
        .json({ message })

    res.status(200).json(message)
  }
}
