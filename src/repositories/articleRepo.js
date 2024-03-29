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
export async function delFav(id) {
  const result = await DELETE(`favorites/article/delete/${id}/`);
  return {
    isError: result.isError,
    body: result.body,
  };
}