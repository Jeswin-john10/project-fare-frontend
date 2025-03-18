import { commonapi } from "./commonapi"
import { serverurl } from "./serverurl"

//register api
export const registerapi = async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/register`,reqBody,"")
}

//loginapi
export const loginapi = async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/login`,reqBody,"")
}


/// add project api
export const addprojectapi =async(reqBody , reqHeader)=>{
    return await commonapi('POST',`${serverurl}/add-project`,reqBody,reqHeader)
   
}