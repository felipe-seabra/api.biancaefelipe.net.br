import jwt from "../utils/jwt";

import { PrismaClient } from "../../prisma/generated/client";

import { IUser, Payload } from "../interfaces";

const prisma = new PrismaClient();

const validateLogin = async (email: string, password: string) => {
  if (!(email && password)) {
    return { type: "MISSING_FIELDS", message: "Some required fields are missing" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email, password },
      select: { name: true, email: true },
    });

    if (!user) return { type: "INVALID_FIELDS", message: "Invalid fields" };

    const payload: Payload = {
      dataValues: {
        name: user.name,
        email: user.email,
      },
    };
    const token = jwt.generateToken(payload);
    return { type: null, message: token };
  } catch (error) {
    return { type: "INVALID_FIELDS", message: "Invalid fields" };
  }
};

export default { validateLogin };
