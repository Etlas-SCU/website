import { DELETE, GET, Post } from "../helpers/apiService";

export async function getArticles() {
  const result = await GET("articles/");
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getArticleById(id) {
  const result = await GET(`articles/${id}/`);
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function addFav(body) {
  const result = await Post("favorites/article/add/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function delFav(body) {
  const result = await DELETE("favorites/article/delete/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}