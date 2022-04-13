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