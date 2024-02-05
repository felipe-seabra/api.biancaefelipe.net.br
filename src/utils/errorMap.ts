const errorMap = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  USER_NOT_FOUND: 404,
  POST_NOT_FOUND: 404,
  EMAIL_ALREADY_REGISTERED: 409,
};

type ErrorType = keyof typeof errorMap;

const mapError = (type: ErrorType) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
