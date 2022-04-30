import { client } from "../config/redis";
import HttpStatus from 'http-status-codes';
export const cache_memory=async (req,res,next)=>{
    const data =await client.get('allNotes');
    if(data==null){
        next();
    } 
    else{
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:JSON.parse(data),
            Message:"Fetched all notes"
        })
    }
}