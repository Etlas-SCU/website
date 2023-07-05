import { Post } from '../helpers/apiService'


export async function ContactUs(fullName , email , subject , message) {
    const data = {
        full_name : fullName ,
        email : email ,
        subject : subject ,
        message : message 
    }
    const result = await Post("contact-us/message/", JSON.stringify(data))
    return {
        isError: result.isError,
        body: result.body,
    }
}