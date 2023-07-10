import {GET , Patch , DELETE , Put} from '../helpers/apiService' ;

export async function getUserInfo(){
    const result = await GET("users/") ;
    return {
      isError: result.isError,
      body: result.body,
    };
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
  return {
    isError: result.isError,
    body: result.body,
  };
}

export async function getFavoriteArticle(){
  const result = await GET("favorites/") ;
  return {
    isError: result.isError,
    body: result.body,
  }
}

export async function deleteFavorite(id){
  const result = await DELETE(`favorites/article/delete/${id}/`) ;
  return{
    isError: result.isError,
    body: result.body,
  }
}

export async function changePassword(body){
  const result = await Put("users/change-password/" ,  JSON.stringify(body) ) ;
  return{
    isError: result.isError,
    body: result.body,
  }
}
