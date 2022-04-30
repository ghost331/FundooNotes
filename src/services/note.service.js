import Note from '../models/note_model';
import {client} from'../config/redis';
export const newNote=async (body)=>{
    const data =await Note.create(body);
    if(data){
        await client.del('allNotes');
    }
    return data;
}
export const retriveAllNotes=async(body)=>{
    const data= await Note.find({userid:body.userid});
   
    if(data==null){
        throw new Error("no notes for the user");
    }
    else{
        await client.set('allNotes',JSON.stringify(data));
    return data;
    }
}
export const retriveParticularNote=async(id,userid)=>{
    const data=await Note.findById({_id:id,userid:userid});
    if(data==null){
        throw new Error("note by this id do not exist");
    }
    return data;
}
export const updateParticularNote=async(_id,body)=>{
    const data=await Note.findByIdAndUpdate(
        {
      _id 
    },
    body,
    {
        new:true

    }
    );
    if(data){
        await client.del('allNotes');       
    }
    return data;
}

export const deleteParticularNote=async(_id)=>{
   await Note.findByIdAndDelete(_id);
   return '';   
}
export const isarchieve=async(id)=>{
    
    const temp=await Note.findById(id);
    if(temp==null){
        throw new Error("Note does not exist");
    }
    if(temp.isArchieve){
    temp.isArchieve=false;
    }
    else{
        temp.isArchieve=true;
    }

    const data=await Note.findByIdAndUpdate(
        {
            _id:id
        },
        temp,
        {
            new:true
        }
           
    );
    return data;
}
export const istrash=async(id)=>{
    
    const temp=await Note.findById(id);
    if(temp==null){
        throw new Error("Note does not exist");
    }
    if(temp.isTrash){
    temp.isTrash=false;
    }
    else{
        temp.isTrash=true;
    }

    const data=await Note.findByIdAndUpdate(
        {
            _id:id
        },
        temp,
        {
            new:true
        }
           
    );
    return data;
}