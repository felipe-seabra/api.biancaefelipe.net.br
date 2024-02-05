import express from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { Response } from "express";
import { IAuthRequest } from "../interfaces";

import giftController from "../controllers/giftController";

const prisma = new PrismaClient();
const gift = express.Router();

gift.get("/", giftController.findAllGifts);
gift.get("/:id", giftController.findById);
gift.post("/", giftController.createNewGift);
gift.put("/:id", giftController.updateById);

gift.delete("/:id", giftController.deleteById);

export default gift;
