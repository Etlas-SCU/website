import {  GET } from "../helpers/apiService";

export async function getTours(pageNum) {
  const result = await GET(`tours/?page=${pageNum}`);
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getTourById(id) {
  const result = await GET(`tours/${id}/`);
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
