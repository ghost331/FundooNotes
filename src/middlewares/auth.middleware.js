import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.headers['token'];
    console.log(bearerToken);
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    const user = await jwt.verify(bearerToken,process.env.SECRET_KEY);
    req.body.userid=user.id;
    next();
  } catch (error) {
    next(error);
  }
};
export const resetuserAuth = async (req, res, next) => {
  try {
    let bearerToken = req.headers['token'];
    console.log("bearer token",bearerToken);
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    const user = await jwt.verify(bearerToken,process.env.NEW_SECRET_KEY);
    req.body.email=user.email;
    next();
  } catch (error) {
    next(error);
  }
};