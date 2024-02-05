import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";
import { Payload } from "../interfaces";

const JWT_SECRET: string = process.env.JWT_SECRET || "MySecretPassword";

const jwtConfig: SignOptions & VerifyOptions = {
  expiresIn: "15m",
  algorithm: "HS256",
};

const generateToken = (payload: Payload): string => {
  try {
    console.log(jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig));
    return jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig);
  } catch (err) {
    throw new Error("Failed to generate token");
  }
};

const decodeToken = (token: string): any => {
  if (!token) {
    throw new Error("Undefined Token");
  }

  try {
    const result = jwt.verify(token, JWT_SECRET);
    return result;
  } catch (err) {
    throw new Error("Invalid signature");
  }
};

export default { generateToken, decodeToken };
