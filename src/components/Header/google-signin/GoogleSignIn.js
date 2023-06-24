import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import google from "../../../images/Pngs/Groupgoogle.png";

export default function GoogleSignIn() {
    
    const onGoogleSignIn = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        onError: errorResponse => console.log(errorResponse)
    });

    return (
        <a href="#" onClick={() => onGoogleSignIn()}>
            <img src={google} alt="google" />
        </a>
    );
}