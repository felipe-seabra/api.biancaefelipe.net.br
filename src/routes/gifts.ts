import express from "express";

import giftController from "../controllers/giftController";

const gift = express.Router();

gift.get("/", giftController.findAllGifts);
gift.get("/:id", giftController.findById);
gift.post("/", giftController.createNewGift);
gift.put("/:id", giftController.updateById);
gift.delete("/:id", giftController.deleteById);

export default gift;
