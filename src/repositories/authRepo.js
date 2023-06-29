import { Patch, Post } from "../helpers/apiService";

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
export async function Logout(body) {
  const result = await Post("auth/logout/", JSON.stringify(body));
  if (!result.isError) {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
  return {
    isError: result.isError,
    body: result.body,
  };
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

export async function RequestPasswordReset(body) {
  const result = await Post("auth/request-password-reset/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}

export async function PasswordResetOtp(body) {
  const result = await Post("auth/password-reset-otp/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function passwordResetComplete(body) {
  const result = await Patch("auth/password-reset-complete/", JSON.stringify(body));
  return {
    isError: result.isError,
    body: result.body,
  };
}