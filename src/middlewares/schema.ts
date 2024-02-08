import Joi from "joi";

export const newUserSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
  isAdmin: Joi.boolean().required(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export const newGiftSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(8).required(),
  amount: Joi.number().required(),
  available: Joi.boolean().required(),
  price: Joi.number().required(),
  imageUrl: Joi.string().uri().required(),
  paymentMethod: Joi.string().required(),
});
