const jwt = require("jsonwebtoken");

const JWT_SECRET: string = process.env.JWT_SECRET || "MySecretPassword";

const jwtConfig = {
  expiresIn: "15m",
  algorithm: "HS256",
};

interface Payload {
  dataValues: any; // Você pode ajustar este tipo de acordo com a estrutura real dos dados que está utilizando.
}

const generateToken = (payload: Payload): string => {
  try {
    return jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig);
  } catch (err) {
    throw new Error("Failed to generate token");
  }
};

const decodeToken = (token: string): any => {
  const jwt = require("jsonwebtoken");

  const JWT_SECRET = process.env.JWT_SECRET || "MySecretPassword";

  const jwtConfig = {
    expiresIn: "15m",
    algorithm: "HS256",
  };

  interface Payload {
    dataValues: string; // Você pode ajustar este tipo de acordo com a estrutura real dos dados que está utilizando.
  }

  const generateToken = (payload: Payload) => {
    try {
      return jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig);
    } catch (err) {
      throw new Error("Failed to generate token");
    }
  };

  const decodeToken = (token: string) => {
    if (!token) {
      throw new Error("Undefined Token");
    }

    try {
      const result = jwt.verify(token, JWT_SECRET);
      return result;
    } catch (err) {
      throw new Error("Invalid assignature");
    }
  };

  module.exports = {
    generateToken,
    decodeToken,
  };
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

export { generateToken, decodeToken };
