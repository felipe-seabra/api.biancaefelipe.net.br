const { newUserSchema } = require("./schema");

import { Request, Response, NextFunction } from "express";
import { IAuthRequest, IUser } from "../interfaces";
import { ValidationError } from "joi";

const validateNewUser = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await newUserSchema.validateAsync(body);
    next();
  } catch (err: any) {
    console.log(err);
    if (err instanceof ValidationError) {
      return res.status(400).send({ message: err.message });
    }
    return res.status(409).send({ message: err.message });
  }
};

export default validateNewUser;
