import jwt from "../utils/jwt";
import { prismaClient } from "../database";

import { Payload } from "../interfaces";

const validateLogin = async (email: string, password: string) => {
  if (!(email && password)) {
    return { type: "MISSING_FIELDS", message: "Some required fields are missing" };
  }

  try {
    const user = await prismaClient.user.findUnique({
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
