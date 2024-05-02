export const errorMap = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  USER_NOT_FOUND: 404,
  GIFT_NOT_FOUND: 404,
  MESSAGE_NOT_FOUND: 404,
  SUPPLIER_NOT_FOUND: 404,
  EMAIL_ALREADY_REGISTERED: 409,
  GIFT_ALREADY_REGISTERED: 409,
  MESSAGE_ALREADY_REGISTERED: 409,
  SUPPLIER_ALREADY_REGISTERED: 409,
} as const

type ErrorType = keyof typeof errorMap

export const mapError = (type: ErrorType) => errorMap[type] || 500
