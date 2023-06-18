import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import styles from "../sign_reg.module.css";
import forget from "../../../../images/Pics/forgetPass.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Context } from "../../../Context/Context";
import OTPInput from "react-otp-input";

export default function ForgetPass() {
  const { t } = useTranslation();
  const [step, setStep] = useState("enterEmail");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [otp, setOtp] = useState("");
  const { setButtonPopup } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


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
  };

  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width={460} height={530} />
      ) : (
        <img className={styles.popup__img} src={forget} alt="formImg" />
      )}
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
          <>
            <Box>
              <Typography className={styles.typo}>
                Type the OTP you received on your e-mail to continue reseting
                your password.
              </Typography>
            </Box>

            <div>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputStyle={styles.otp_input}
                Separator={<span></span>}
                renderInput={(props) => <input {...props} />}
              />
              <Typography
                style={{
                  color: "#55c4e0",
                  textDecoration: "underline",
                  fontSize: "12px",
                }}
              >
                Resend the mail again.
              </Typography>
              <Box>
                <button type="submit" onClick={handleVerificationCodeSubmit}>
                  Next
                </button>
              </Box>
            </div>
          </>
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
    </>
  );
}
