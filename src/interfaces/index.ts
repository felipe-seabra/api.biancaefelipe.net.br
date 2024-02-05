import { Request } from "express";
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IGift {
  name: string;
  description: string;
  amount: number;
  available: boolean;
  price: number;
  imageUrl: string;
}

export interface IAuthRequest extends Request {
  user?: IUser;
}

export interface Payload {
  dataValues: {
    name: string;
    email: string;
  };
}
