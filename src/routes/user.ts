import express from "express";

import userController from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";
import { userMiddleware } from "../middlewares";

const user = express.Router();

user.get("/", authMiddleware.authToken, userController.fildAllUsers);
user.get("/:id", authMiddleware.authToken, userController.findById);
user.post("/", userMiddleware.validateNewUser, userController.createNewUser);
user.put("/:id", authMiddleware.authToken, userController.updateById);
user.delete("/:id", authMiddleware.authToken, userController.deleteById);

export default user;
