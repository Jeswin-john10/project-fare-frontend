import axios from "axios";
import { data } from "react-router-dom";

export const commonapi = async (httpRequest ,url,reqBody,reqHeader)=>{
    const reqconfiq ={
        method : httpRequest,
        url ,
        data : reqBody,
    headers : reqHeader ? reqHeader :{'Content-Type' :'application/json'}
    }
    return await axios(reqconfiq).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}