import commonAPI from "./axios"

export const registration=async(userDetails)=>{
    return await commonAPI("post","/user",userDetails)
}