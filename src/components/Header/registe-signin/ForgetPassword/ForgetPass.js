import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "../Signin/sign_reg.module.css";
import forget from "../../../../images/Pics/forgetPass.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Context } from "../../../Context/Context";
import Otp from "../../../Otp/Otp";
import MPopUp from "../../../PopUp_Message/error/MPopUp";

export default function ForgetPass() {
  const { t } = useTranslation();
  const [step, setStep] = useState("enterEmail");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const { setButtonPopup, setMassagePopup } = useContext(Context);

  // function handleChange(OTP) {
  //   setOTP(OTP);
  // }
  const handleEmailSubmit = () => {
    setStep("enterVerificationCode");
  };

  const handleVerificationCodeSubmit = () => {
    setStep("resetPassword");
  };

  const handlePasswordReset = () => {
    setButtonPopup(false);
    // setMassagePopup(true);
  };
  return (
    <>
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
          <Otp verfiy={handleVerificationCodeSubmit} />
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
              />
              <label htmlFor="password">Confirm password</label>
              <input
                type="password"
                placeholder={t("nav.passwordPlaceholder")}
                name="password"
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
      {/* <MPopUp type={"warning"}>
        <h2>Oops!</h2>
        <p style={{ marginTop: "10px", fontWeight: "300" }}>
          Your password hasn’t been reset.
          <br />
          Please, try again!
        </p>
      </MPopUp> */}
    </>
  );
}
