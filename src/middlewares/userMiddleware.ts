import { newUserSchema, updateUserSchema } from "./schema";

import { Response, NextFunction } from "express";
import { IAuthRequest } from "../interfaces";
import { ValidationError } from "joi";

const validateNewUser = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await newUserSchema.validateAsync(body);
    next();
  } catch (err: any) {
    console.log(err);
    if (err instanceof ValidationError) {
      return res.status(400).send({ message: "Some required fields are missing" });
    }
    return res.status(409).send({ message: "Email already registered" });
  }
};

const validateUpdateUser = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    await updateUserSchema.validateAsync(body);
    next();
  } catch (err: any) {
    console.log(err);
    return res.status(400).send({ message: "Some required fields are missing" });
  }
};

export default { validateNewUser, validateUpdateUser };
