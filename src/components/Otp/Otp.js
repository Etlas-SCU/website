import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Box, Typography } from "@mui/material";
import styles from "../Header/registe-signin/Signin/sign_reg.module.css";

export default function Otp(props) {
  const [otp, setOtp] = useState("");

  return (
    <Box className={styles.form}>
      <Box>
        <Typography className={styles.typo}>
          Type the OTP you received on your e-mail.
        </Typography>
      </Box>
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
        <button type="submit" onClick={props.verfiy}>
          Next
        </button>
      </Box>
    </Box>
  );
}
