import Note from '../models/note_model';
export const newNote=async (body)=>{
    const data =await Note.create(body);
    return data;
}
export const retriveAllNotes=async()=>{
    const data= await Note.find();
    if(data==null){
        throw new Error("no notes for the user");
    }
    else
    return data;
}
export const retriveParticularNote=async(id)=>{
    console.log("retriving particualr note: ",id);
    const data=await Note.findById(id);
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
    return data;
}

export const deleteParticularNote=async(_id)=>{
   await Note.findByIdAndDelete(_id);
   return '';   
}