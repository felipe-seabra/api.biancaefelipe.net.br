import jwt from "../utils/jwt";

import { PrismaClient } from "../../prisma/generated/client";

import { IUser, Payload } from "../interfaces";

const prisma = new PrismaClient();

const createNewUser = async (user: IUser) => {
  try {
    await prisma.user.create({
      data: { ...user },
    });
    const payload: Payload = {
      dataValues: {
        name: user.name,
        email: user.email,
      },
    };

    const token = jwt.generateToken(payload);
    return { type: null, message: token };
  } catch (error) {
    return { type: "EMAIL_ALREADY_REGISTERED", message: "Email already registered" };
  }
};

export const fildAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  if (users.length === 0) return { type: "USER_NOT_FOUND", message: "No user found" };
  return { type: null, message: users };
};

const findById = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  if (!result) return { type: "USER_NOT_FOUND", message: "User does not exists" };

  return { type: null, message: result };
};

const updateById = async (props: IUser, id: string) => {
  try {
    const result = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { ...props },
    });

    return { type: null, message: "User updated successfully" };
  } catch (error) {
    return { type: "USER_NOT_FOUND", message: "User does not exists" };
  }
};

const deleteById = async (id: string) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return { type: null, message: "User successfully deleted" };
  } catch (error) {
    return { type: "USER_NOT_FOUND", message: "User does not exists" };
  }
};

export default { createNewUser, fildAllUsers, findById, updateById, deleteById };
