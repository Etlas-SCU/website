import { Box, Stack } from "@mui/material";
import React from "react";
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
