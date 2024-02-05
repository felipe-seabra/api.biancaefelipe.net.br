import { newGiftSchema } from "./schema";

import { Response, NextFunction } from "express";
import { IAuthRequest } from "../interfaces";

const validateNewGift = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    await newGiftSchema.validateAsync(body);
    next();
  } catch (err: any) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

export default { validateNewGift };
