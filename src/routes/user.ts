import express from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { Response } from "express";
import { IAuthRequest } from "../interfaces";
// import { userMiddleware } from "../middlewares";

const prisma = new PrismaClient();
const user = express.Router();

user.get("/", async (_req, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

user.post("/", async (req: IAuthRequest, res: Response) => {
  try {
    const result = await prisma.user.create({
      data: { ...req.body },
    });
    res.json(result);
  } catch (error) {
    res.json({ message: "E-mail already registered" });
  }
});

user.get("/:id", async (req: IAuthRequest, res: Response) => {
  const { id } = req.params;
  const result = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(result);
});

user.put("/:id", async (req: IAuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    const result = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { ...req.body },
    });
    res.json(result);
  } catch (error) {
    res.json({ message: "User not exists" });
  }
});

user.delete("/:id", async (req: IAuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: "User not exists" });
  }
});

export default user;
