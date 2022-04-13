import express from 'express';
import * as notecontroller from '../controllers/notecontroller';
import { userAuth } from '../middlewares/auth.middleware';
const router = express.Router();
router.post('',userAuth,notecontroller.newNote);
export default router;