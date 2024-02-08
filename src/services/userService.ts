import bcrypt from "bcrypt";
import jwt from "../utils/jwt";
import { prismaClient } from "../database";

import { IUser, Payload } from "../interfaces";

const createNewUser = async (user: IUser) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);

    const userWithHashedPassword = { ...user, password: hashedPassword };

    await prismaClient.user.create({
      data: { ...userWithHashedPassword },
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
  const users = await prismaClient.user.findMany({
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
  const result = await prismaClient.user.findUnique({
    where: { id: id },
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
    const result = await prismaClient.user.update({
      where: { id: id },
      data: { ...props },
    });

    return { type: null, message: "User updated successfully" };
  } catch (error) {
    return { type: "USER_NOT_FOUND", message: "User does not exists" };
  }
};

const deleteById = async (id: string) => {
  try {
    await prismaClient.user.delete({
      where: { id: id },
    });

    return { type: null, message: "User successfully deleted" };
  } catch (error) {
    return { type: "USER_NOT_FOUND", message: "User does not exists" };
  }
};

export default { createNewUser, fildAllUsers, findById, updateById, deleteById };
