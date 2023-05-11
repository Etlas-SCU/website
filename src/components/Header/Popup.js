import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./Popup.module.css";
import Register from "./registe-signin/Register";
import SignIn from "./registe-signin/SignIn";
import e from "../../images/Pngs/e.png";
import close from "../../images/Icons/close.png";
import { useContext } from "react";
import { Context } from "../Context/Context";
import ForgetPass from "./registe-signin/ForgetPass";

export default function Popup() {
  const { buttonPopup, setButtonPopup } = useContext(Context);

  return buttonPopup[0] ? (
    <Box className={styles.popup}>
      <Stack direction="row" className={styles.popup_inner}>
        {buttonPopup[1] === "Register" ? (
          <Register />
        ) : buttonPopup[1] === "Sign in" ? (
          <SignIn />
        ) : (
          <ForgetPass />
        )}
        <img className={styles.e} src={e} alt="epng" />
        <Box
          className={styles.popup__closeBtn}
          onClick={() => setButtonPopup(false)}
        >
          <img src={close} alt="closeIcon" />
        </Box>
      </Stack>
    </Box>
  ) : (
    ""
  );
}
