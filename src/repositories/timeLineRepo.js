import { GET } from "../helpers/apiService";

export async function getTimeLine() {
  const result = await GET("timeline/");
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getTimeLineById(id) {
  const result = await GET(`timeline/${id}/`);
  return {
    isError: result.isError,
    body: result.body,
  };
}