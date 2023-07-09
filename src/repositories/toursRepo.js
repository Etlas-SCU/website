import {  GET } from "../helpers/apiService";

export async function getTours(pageNum) {
  const result = await GET(`tours/?page=${pageNum}`);
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function getTourById(id) {
  const result = await GET(`tours/${id}/`);
  return {
    isError: result.isError,
    body: result.body,
  };
}
