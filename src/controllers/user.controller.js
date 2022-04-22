import { note } from '@hapi/joi/lib/base';
import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.getUser(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  }
   catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
   }
};



export const login=async (req,res,next)=>{
  try{
    const data=await UserService.login(req.body);
    console.log("login token",data);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data:data,
      message: 'login successfull'

    });
  }catch(error){
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
}

/**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateUser = async (req, res, next) => {
  try {
    const data = await UserService.updateUser(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteUser = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const forgetpassword=async(req,res,next)=>{
  try {
    const data = await UserService.forgetpassword(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Message send successfully '
    });
  }
   catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
   }
};

export const resetpassword=async(req,res,next)=>{
  try{

    const data =await UserService.resetpassword(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: ' Password updated successfully'
    });
  }
   catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
   }

  }