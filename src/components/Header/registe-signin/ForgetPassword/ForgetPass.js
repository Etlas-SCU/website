import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "../Signin/sign_reg.module.css";
import forget from "../../../../images/Pics/forgetPass.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Context } from "../../../Context/Context";
import Otp from "../../../Otp/Otp";
import MPopUp from "../../../PopUp_Message/error/MPopUp";
import {
  PasswordResetOtp,
  RequestPasswordReset,
  passwordResetComplete,
} from "../../../../repositories/authRepo";

export default function ForgetPass() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const { setButtonPopup, setMassagePopup, step, setStep } =
    useContext(Context);
  const [popup, setPopup] = useState(null);
  const [uidb64, setuidb64] = useState(null);
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleresetOtp = (jsonBody) => {
    PasswordResetOtp(jsonBody).then((result) => {
      if (result.isError) {
        setMassagePopup(true);
        setPopup(<MPopUp type="error">otp is wrong</MPopUp>);
      } else {
        setStep("resetPassword");
        setToken(result.body.token);
        setuidb64(result.body.uidb64);
      }
    });
  };

  const handleEmailSubmit = () => {
    var jsonBody = {
      email: email,
    };
    RequestPasswordReset(jsonBody).then((res) => {
      if (res.isError) {
        setMassagePopup(true);
        setPopup(<MPopUp type="error">{res.body.error}</MPopUp>);
      } else {
        setMassagePopup(true);
        setPopup(<MPopUp type="done">{res.body.success}</MPopUp>);
        setStep("enterVerificationCode");

        RequestPasswordReset(jsonBody).then((res) => {
          if (res.isError) {
            setMassagePopup(true);
            setPopup(<MPopUp type="error">faild send otp</MPopUp>);
          } else {
            setMassagePopup(true);
            setPopup(<MPopUp type="done">otp sended</MPopUp>);
          }
        });
      }
    });
  };

  const handlePasswordReset = () => {
    var jsonBody = {
      token: token,
      uidb64: uidb64,
      password: password,
      confirm_password: confirmPassword,
    };
    passwordResetComplete(jsonBody).then((res) => {
      if (res.isError) {
        setMassagePopup(true);
        setPopup(<MPopUp type="error">{res.body.message}</MPopUp>);
      } else {
        setMassagePopup(true);
        setPopup(<MPopUp type="done">{res.body.message}</MPopUp>);
        setTimeout(() => {
          setButtonPopup(false);
        }, 2000);
        console.log(res.body)
      }
    });
  };
  return (
    <>
      {popup}
      <img className={styles.popup__img} src={forget} alt="formImg" />
      <Stack
        sx={{
          width: { xs: "90%", md: "70%" },
          m: "50px 15px 0",
        }}
        className={styles.form}
      >
        <Box>
          <Typography fontWeight="800"> Forgot password</Typography>
        </Box>

        {step === "enterEmail" && (
          <>
            <Box>
              <Typography className={styles.typo}>
                Enter your E-mail to send a mail to re-assign a new password for
                your account.
              </Typography>
            </Box>
            <Stack direction="column">
              <label htmlFor="email">{t("nav.email")}</label>
              <input
                type="email"
                placeholder={t("nav.emailPlaceholder")}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Box>
                <button type="submit" onClick={handleEmailSubmit}>
                  Next
                </button>
              </Box>
            </Stack>
          </>
        )}

        {step === "enterVerificationCode" && (
          <Otp callFrom="forgetPass" verify={handleresetOtp} />
        )}

        {step === "resetPassword" && (
          <>
            <Box>
              <Typography className={styles.typo}>
                Please, enter your new password.
              </Typography>
            </Box>
            <Stack direction="column">
              <label htmlFor="password">New password</label>
              <input
                type="password"
                placeholder={t("nav.passwordPlaceholder")}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Confirm password</label>
              <input
                type="password"
                placeholder={t("nav.passwordPlaceholder")}
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Box>
                <button type="submit" onClick={handlePasswordReset}>
                  Finish
                </button>
              </Box>
            </Stack>
          </>
        )}
      </Stack>
    </>
  );
}
