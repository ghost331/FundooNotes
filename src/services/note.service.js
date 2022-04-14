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