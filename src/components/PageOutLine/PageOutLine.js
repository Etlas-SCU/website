import { Stack } from "@mui/material";
import React from "react";
import filter from "../../images/Icons/Filter.png";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./PageOutLine.module.css";

export default function PageOutLine({ children, value }) {
  return (
    <Stack pt="120px" sx={{backgroundColor:"white"}}>
      <Stack direction="row" gap="10px" flexWrap="wrap">
        <h1 className={styles.title}>{value}</h1>

        <Stack direction="row" gap="10px" className={styles.input}>
          <SearchInput />
          <img src={filter} alt="filter" className={styles.filterIcon} />
        </Stack>
      </Stack>
      {children}

      <Stack>{/* footer */}</Stack>
    </Stack>
  );
}
