import { DELETE, GET, Post } from "../helpers/apiService";

export async function getArticles(pageNum) {
  const result = await GET(`articles/?page=${pageNum}`);
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getArticleById(id) {
  const result = await GET(`articles/${id}/`);
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function isFavorite(body) {
  const result = await Post("favorites/is-favorite/", JSON.stringify(body));
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function addFav(body) {
  const result = await Post("favorites/article/add/", JSON.stringify(body));
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function delFav(body) {
  const result = await DELETE("favorites/article/delete/", JSON.stringify(body));
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}