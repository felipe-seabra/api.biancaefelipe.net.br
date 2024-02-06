import express from "express";

import giftController from "../controllers/giftController";
import authMiddleware from "../middlewares/authMiddleware";
import giftMiddleware from "../middlewares/giftMiddleware";

const gift = express.Router();

gift.get("/", giftController.findAllGifts);
gift.get("/:id", authMiddleware.authToken, giftController.findById);
gift.post(
  "/",
  authMiddleware.authToken,
  giftMiddleware.validateNewGift,
  giftController.createNewGift
);
gift.put(
  "/:id",
  authMiddleware.authToken,
  giftMiddleware.validateUpdateGift,
  giftController.updateById
);
gift.delete("/:id", authMiddleware.authToken, giftController.deleteById);

export default gift;
