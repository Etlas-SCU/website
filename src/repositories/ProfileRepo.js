import {GET , Patch} from '../helpers/apiService' ;

export async function getUserInfo(){
    const result = await GET("users/") ;
    return result ;
}

export async function editUserInfo(body){
  const result = await Patch("users/" , JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}

export async function getBestScore(){
  const result = await GET("users/total-best-score/") ;
  return result ;
}

