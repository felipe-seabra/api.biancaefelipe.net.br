import { PrismaClient } from "../../prisma/generated/client";
import { IGift } from "../interfaces";

const prisma = new PrismaClient();

const findAllGifts = async () => {
  const gifts = await prisma.gifts.findMany();

  if (gifts.length === 0) return { type: "GIFT_NOT_FOUND", message: "No gift found" };
  return { type: null, message: gifts };
};

const findById = async (id: string) => {
  const result = await prisma.gifts.findUnique({
    where: { id: parseInt(id) },
  });

  if (!result) return { type: "GIFT_NOT_FOUND", message: "No gift found" };
  return { type: null, message: result };
};

const createNewGift = async (gift: IGift) => {
  try {
    await prisma.gifts.create({
      data: { ...gift },
    });

    return { type: null, message: "Gift registered successfully" };
  } catch (error) {
    return { type: "GIFT_ALREADY_REGISTERED", message: "Gift already registered" };
  }
};

const updateById = async (props: IGift, id: string) => {
  try {
    await prisma.gifts.update({
      where: { id: parseInt(id) },
      data: { ...props },
    });

    return { type: null, message: "Gift updated successfully" };
  } catch (error) {
    return { type: "GIFT_NOT_FOUND", message: "No gift found" };
  }
};

const deleteById = async (id: string) => {
  try {
    await prisma.gifts.delete({
      where: { id: parseInt(id) },
    });

    return { type: null, message: "Gift successfully deleted" };
  } catch (error) {
    return { type: "GIFT_NOT_FOUND", message: "No gift found" };
  }
};

export default { findAllGifts, findById, createNewGift, updateById, deleteById };
