import express from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { Response } from "express";
import { IAuthRequest } from "../interfaces";

import userController from "../controllers/userController";
// import { userMiddleware } from "../middlewares";

const prisma = new PrismaClient();
const user = express.Router();

user.get("/", userController.fildAllUsers);
user.get("/:id", userController.findById);
user.post("/", userController.createNewUser);
user.put("/:id", userController.updateById);
user.delete("/:id", userController.deleteById);

export default user;
