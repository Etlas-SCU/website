import React, { useContext, useState } from "react";
import OTPInput from "react-otp-input";
import { Box, Typography } from "@mui/material";
import styles from "../Header/registe-signin/Signin/sign_reg.module.css";
import { Context } from "../Context/Context";
import { PasswordResetOtp, RequestOtp, emailVerify } from "../../repositories/authRepo";
import MPopUp from "../PopUp_Message/error/MPopUp";

export default function Otp(props) {
  const [otp, setOtp] = useState("");
  const { setButtonPopup, setMassagePopup ,step,setStep} = useContext(Context);
  const [popup, setPopup] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    var jsonBody = {
      otp: otp,
    };

    if (props.callFrom === "forgetPass") {
      props.verify(jsonBody);
    } else {
      emailVerify(jsonBody).then((result) => {
        if (!result.isError) {
          setButtonPopup([false, ""]);
          setButtonPopup([true, "Sign in"]);
        } else {
          setMassagePopup(true);
          setPopup(<MPopUp type="error">otp is wrong</MPopUp>);
        }
      });
    }
  };

  const handleResendOtp = () => {
    var jsonBody = {
      email: props.email,
    };
    RequestOtp(jsonBody).then((res) => {
      if (res.isError) {
        setMassagePopup(true);
        setPopup(<MPopUp type="error">faild send otp</MPopUp>);
      } else {
        setMassagePopup(true);
        setPopup(<MPopUp type="done">otp sended</MPopUp>);
      }
    });
  };
  return (
    <>
      {popup}
      <Box className={styles.form}>
        <Box>
          <Typography className={styles.typo}>
            Type the OTP you received on your e-mail.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={styles.otp_input}
            Separator={<span></span>}
            renderInput={(props) => <input {...props} />}
          />
          <span
            style={{
              color: "#55c4e0",
              textDecoration: "underline",
              fontSize: "12px",
            }}
            onClick={handleResendOtp}
          >
            Resend the mail again.
          </span>
          <Box>
            <button type="submit">Next</button>
          </Box>
        </form>
      </Box>
    </>
  );
}
