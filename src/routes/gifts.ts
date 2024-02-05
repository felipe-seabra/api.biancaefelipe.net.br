import express from "express";
import { PrismaClient } from "../../prisma/generated/client";
import { Response } from "express";
import { IAuthRequest } from "../interfaces";

const prisma = new PrismaClient();
const gift = express.Router();

gift.get("/", async (_req, res: Response) => {
  const gifts = await prisma.gifts.findMany();
  res.json(gifts);
});

gift.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.gifts.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(result);
});

gift.post("/", async (req: IAuthRequest, res: Response) => {
  try {
    const result = await prisma.gifts.create({
      data: { ...req.body },
    });
    res.json(result);
  } catch (error) {
    res.json({ message: "Gift already exists" });
  }
});

gift.put("/:id", async (req: IAuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    const result = await prisma.gifts.update({
      where: { id: parseInt(id) },
      data: { ...req.body },
    });
    res.json(result);
  } catch (error) {
    res.json({ message: "Gift not exists" });
  }
});

gift.delete("/:id", async (req: IAuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.gifts.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Gift deleted" });
  } catch (error) {
    res.json({ message: "Gift not exists" });
  }
});

export default gift;
