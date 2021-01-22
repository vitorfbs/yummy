const yup = require('yup');

const handler = require('../handler/handler.js');

module.exports = ({ shape, path = 'query' }) => async (req, res, next) => {
  const schema = yup.object().shape(shape);

  try {
    const validData = await schema.validate(req[path]);
    req.validData = validData;
    return next();
  } catch (error) {
    return handler.onRequestError(res, error);
  }
}