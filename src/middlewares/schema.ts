import Joi from 'joi'

export const newUserSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required(),
  isAdmin: Joi.boolean().required(),
  isMaster: Joi.boolean().default(false),
})

export const updateUserSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6),
  isAdmin: Joi.boolean().required(),
})

export const newGiftSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(8).required(),
  amount: Joi.number().required(),
  available: Joi.boolean().required(),
  price: Joi.number().required(),
  imageUrl: Joi.string().uri().required(),
  paymentMethod: Joi.string().required(),
})

export const newMessageSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string().min(8).required(),
})

export const newSupplierSchema = Joi.object({
  name: Joi.string().min(8).required(),
  phone: Joi.string().required(),
  email: Joi.string().email().optional(),
  service: Joi.string().required(),
  contractedValue: Joi.number().integer().min(0).required(),
  amountPaid: Joi.number().integer().min(0).required(),
  observation: Joi.array().items(Joi.string()).optional(),
  opened: Joi.boolean().required(),
})
