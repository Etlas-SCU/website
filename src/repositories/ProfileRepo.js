import {GET , Patch , DELETE} from '../helpers/apiService' ;

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
  console.log(result.body.results);
  return {
    isError: result.isError,
    body: result.body,
  }
}

export async function getFavoriteById(id){
  const result = await GET(`favorites/${id}/`) ;
  console.log(result.body) ;
  return{
    isError: result.isError,
    body: result.body,
  }
}
