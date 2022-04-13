import Note from '../models/note_model';
export const newNote=async (body)=>{
    const data =await Note.create(body);
    return data;
}