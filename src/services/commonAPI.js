//common API

import axios from "axios";

export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"} //there are two types
        //of contents to upload
            
        }
        return await axios(reqConfig).then((result)=>{
            return result
        }).catch((err)=>{
            return err
        })
    }

