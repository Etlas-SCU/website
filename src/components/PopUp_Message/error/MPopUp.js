import { Box, Stack } from "@mui/material";
import React from "react";
import close from "../../../images/Icons/close.png";
import styles from "./MPopUp.module.css";
import error from "../../../images/Pngs/error.png";
import warning from "../../../images/Pngs/warning.png";
import done from "../../../images/Pngs/done.png";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useEffect } from "react";

export default function MPopUp(props) {
  const { massagePopup, setMassagePopup } = useContext(Context);

  useEffect(() => {
    if (massagePopup) {
      const timeoutId = setTimeout(() => {
        setMassagePopup(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [massagePopup]);

  return massagePopup ? (
    <Stack className={styles.popup}>
      <Box
        className={`${styles.popup_inner} ${
          props.type === "error"
            ? styles.error
            : props.type === "warning"
            ? styles.warning
            : styles.done
        }`}
      >
        {/* <button
          className={styles.close_btn}
          onClick={() => setMassagePopup(false)}
        >
          <img src={close} className={styles.close_img} alt="close" />
        </button> */}
        {props.type === "error" ? (
          <img src={error} className={styles.MImge} />
        ) : props.type === "warning" ? (
          <img src={warning} className={styles.MImge} />
        ) : (
          <img src={done} className={styles.MImge} />
        )}
        {props.children}
        <button className={styles.OkBtn} onClick={() => setMassagePopup(false)}>
          Ok
        </button>
      </Box>
    </Stack>
  ) : (
    ""
  );
}
