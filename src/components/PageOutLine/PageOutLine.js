import { Stack } from "@mui/material";
import React from "react";
import filter from "../../images/Icons/Filter.png";
import styles from "./PageOutLine.module.css";

export default function PageOutLine({ children, value }) {
  return (
    <Stack pt="120px">
      <Stack direction="row" gap="30px">
        <h1 className={styles.title}>{value}</h1>
        <img src={filter} alt="filter" className={styles.filterIcon} />
      </Stack>
      {children}

      <Stack>
        {/* footer */}
      </Stack>
    </Stack>
  );
}
