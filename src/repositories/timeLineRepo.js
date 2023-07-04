import { GET } from "../helpers/apiService";

export async function getTimeLine() {
  const result = await GET("timeline/");
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getTimeLineById(id) {
  const result = await GET(`timeline/${id}/`);
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}