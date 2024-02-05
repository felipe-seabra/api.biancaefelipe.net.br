import { Request } from "express";
export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IGift {
  name: string;
  description: string;
  amout: number;
  available: boolean;
  price: number;
  imgUrl: string;
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
