import { GET } from "../helpers/apiService";

export async function getArticles() {
    const result = await GET("articles/");
    return {
      isError: result.isError,
      body: result.body,
    };
  }