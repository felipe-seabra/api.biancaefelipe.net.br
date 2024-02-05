const Joi = require("joi");

export const newUserSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
});

export const newGiftSchema = Joi.object({
  name: Joi.string().min(8).required(),
  description: Joi.string().min(8).required(),
  amount: Joi.number().required(),
  available: Joi.boolean().required(),
  price: Joi.number().required(),
  imageUrl: Joi.string().uri().required(),
});
