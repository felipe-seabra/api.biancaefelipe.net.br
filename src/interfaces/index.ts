export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IGift {
  name: string;
  description: string;
  amout: number;
  available: boolean;
  price: number;
  imgUrl: string;
}
