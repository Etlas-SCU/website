import { Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ArticlesCard from "../../ArticlesCard/ArticlesCard.js";
import OutLineBtn from "../../outLineBtn/OutLineBtn.js";
import styles from "./Sec5.module.css";

export default function Sec5() {

  return (
    <Stack className={styles.sec5}>
      <Box textAlign="center" className={styles.title}>
        <p>Check our articles</p>
      </Box>
      
      <Stack className={styles.cont} >
       <Box className={styles.cards}>
       <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
       </Box>
      </Stack>

      <Box textAlign="center">
        <NavLink to="/articles">
          <OutLineBtn />
        </NavLink>
      </Box>
    </Stack>
  );
}
