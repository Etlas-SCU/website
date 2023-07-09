import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import google from "../../../images/Pngs/Groupgoogle.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function GoogleSignIn() {
  const { setButtonPopup } = useContext(Context);
  const onGoogleSignIn = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem("access", codeResponse.body.access_token);
      console.log(codeResponse);
      setButtonPopup([false, ""]);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <a href="#" onClick={() => onGoogleSignIn()}>
      <img src={google} alt="google" />
    </a>
  );
}
