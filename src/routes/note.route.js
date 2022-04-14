import express from 'express';
import * as notecontroller from '../controllers/notecontroller';
import { userAuth } from '../middlewares/auth.middleware';
const router = express.Router();

router.post('',userAuth,notecontroller.newNote);
router.get('',userAuth,notecontroller.retriveAllNotes);
router.get('/:_id',userAuth,notecontroller.retriveParticularNote);
router.put('/:_id',userAuth,notecontroller.updateParticularNote);
router.delete('/:_id',userAuth,notecontroller.deleteParticularNote);
router.put('/isarchieve/:_id',userAuth,notecontroller.isarchieve);
router.put('/istrash/:_id',userAuth,notecontroller.istrash);
export default router;