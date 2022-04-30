import express from 'express';
import * as notecontroller from '../controllers/notecontroller';
import { userAuth } from '../middlewares/auth.middleware';
import { cache_memory } from '../middlewares/redismiddleware';
const router = express.Router();

router.post('',userAuth,notecontroller.newNote);
router.get('',userAuth,cache_memory,notecontroller.retriveAllNotes);
router.get('/:_id',userAuth,notecontroller.retriveParticularNote);
router.put('/:_id',userAuth,notecontroller.updateParticularNote);
router.delete('/:_id',userAuth,notecontroller.deleteParticularNote);

export default router;