import { Box } from "@mui/system";
import React from "react";
import styles from "./OutLineBtn.module.css"

export default function OutLineBtn({value}) {
  return <Box className={styles.btn}>{value}</Box>;
}
