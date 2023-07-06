import { Post } from '../helpers/apiService'


export async function ContactUs(body) {
    const result = await Post("contact-us/message/", JSON.stringify(body))
    console.log(result.body) ;
    return {
        isError: result.isError,
        body: result.body,
    }
}