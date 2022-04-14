import { note } from '@hapi/joi/lib/base';
import HttpStatus from 'http-status-codes';
import * as noteservice from '../services/note.service'

export const newNote = async (req, res, next) => {
    try {
      const data = await noteservice.newNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'New Note created  successfully'
      });
    }
     catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
     }
  };

  export const retriveAllNotes=async(req,res,next)=>{
    try {
      const data = await noteservice.retriveAllNotes();
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'all notes retrived'
      });
    }
     catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
     }
  };

  export const retriveParticularNote=async(req,res,next)=>{
    try {
      const data = await noteservice.retriveParticularNote(req.params._id);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Particular Note Retrived'
      });
    }
     catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
     }
  };

  export const updateParticularNote=async(req,res,next)=>{
    try {
      const data = await noteservice.updateParticularNote(req.params._id,req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Particular Note UPDATED'
      });
    }
     catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
     }
  };

  export const deleteParticularNote=async(req,res,next)=>{
    try {
      const data = await noteservice.deleteParticularNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Particular Note deleted'
      });
    }
     catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
     }
  };