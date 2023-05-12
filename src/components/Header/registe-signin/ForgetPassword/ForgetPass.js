import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "../sign_reg.module.css";
import forget from "../../../../images/Pics/forgetPass.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Context } from "../../../Context/Context";

export default function ForgetPass() {
  const { t } = useTranslation();
  const [step, setStep] = useState("enterEmail");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const { setButtonPopup } = useContext(Context);


  const handleEmailSubmit = () => {
    setStep("enterVerificationCode");
  };

  const handleVerificationCodeSubmit = () => {
    setStep("resetPassword");
  };

  const handlePasswordReset = () => {
    setButtonPopup(false)
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
              <Typography fontSize="12px" pt="5px">
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
              <Typography fontSize="12px" pt="5px">
                Type the OTP you received on your e-mail to continue reseting
                your password.
              </Typography>
            </Box>
            <Stack direction="column">
              <label htmlFor="email">{t("nav.email")}</label>
              <input
                type="email"
                placeholder={t("nav.emailPlaceholder")}
                name="email"
              />

              <Box>
                <button type="submit" onClick={handleVerificationCodeSubmit}>
                  Next
                </button>
              </Box>
            </Stack>
          </>
        )}

        {step === "resetPassword" && (
          <>
            <Box>
              <Typography fontSize="12px" pt="5px">
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
