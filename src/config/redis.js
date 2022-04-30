import { createClient } from "redis";
import logger from'./logger';
export const client=createClient();
const clientRadis=async()=>{
    try{
        client.connect();
        logger.info("connected to the redis database");
    }catch(error){
        logger.error("could not connect to the redis database",error);
    }
}
export default clientRadis;