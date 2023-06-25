import { Post } from "../helpers/apiService";

export async function Login(body) {
  const result = await Post("auth/login/", JSON.stringify(body));
  if (!result.isError) {
    localStorage.setItem("access", result.body.tokens.access);
    localStorage.setItem("refresh", result.body.tokens.refresh);
  }
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function Logout() {
  localStorage.removeItem("access");
}

export async function refreshToken() {
  var refresh = localStorage.getItem("refresh");
  const result = await Post(
    "auth/token/refresh/",
    JSON.stringify({ refresh: refresh })
  );
  if (!result.isError) {
    localStorage.setItem("access", result.body.access);
    localStorage.setItem("refresh", result.body.refresh);
  }
}

export async function register(body) {
  const result = await Post("auth/register/", JSON.stringify(body));
  console.log(result.body)
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function RequestOtp(body) {
  const result = await Post("auth/request-verify-otp/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}

export async function emailVerify(body) {
  const result = await Post("auth/email-verify/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}