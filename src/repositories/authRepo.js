import { Post } from "../helpers/apiService";

export async function Login(body) {
  const result = await Post("auth/login/", JSON.stringify(body));
  if (!result.isError) {
    localStorage.setItem("access", result.body.tokens.access);
    localStorage.setItem("refresh", result.body.tokens.refresh);
  }
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function Logout() {
localStorage.removeItem("access");
}

export async function refreshToken() {
  var refresh = localStorage.getItem("refresh");
  const result = await Post("auth/token/refresh/",JSON.stringify({ refresh: refresh }));
  if (!result.isError) {
    localStorage.setItem("access", result.body.access);
    localStorage.setItem("refresh", result.body.refresh);
  }
}

// export function Register(body){
//     Post('auth/login/',JSON.stringify(body))
//     .then(result =>{
//         if(result.isError){
//             console.log("error")
//         }else{
//             localStorage.setItem('access',result.body.tokens.access)
//             localStorage.setItem('refresh',result.body.tokens.refresh)
//         }
//     })
// }
