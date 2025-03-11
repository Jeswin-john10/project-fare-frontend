import { commonapi } from "./commonapi"
import { serverurl } from "./serverurl"


export const registerapi = async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/register`,reqBody,"")
}