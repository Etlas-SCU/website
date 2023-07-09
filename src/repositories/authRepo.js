import { Patch, Post } from "../helpers/apiService";

export async function Login(body) {
  const result = await Post("auth/login/", JSON.stringify(body));
  if (!result.isError) {
    localStorage.setItem("access", result.body.tokens.access);
    localStorage.setItem("refresh", result.body.tokens.refresh);
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (3 * 60 * 1000));
    localStorage.setItem("tokenExpiry", expiryDate.getTime());
  }
  return {
    isError: result.isError,
    body: result.body,
  };
}
export async function Logout(body) {
  const result = await Post("auth/logout/", JSON.stringify(body));

  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("tokenExpiry");

  return {
    isError: result.isError,
    body: result.body,
  };
}

export async function register(body) {
  const result = await Post("auth/register/", JSON.stringify(body));
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