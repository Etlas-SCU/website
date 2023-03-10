import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ArticlesCard from "../../ArticlesCard/ArticlesCard.js";
import OutLineBtn from "../../outLineBtn/OutLineBtn.js";
import styles from "./Sec5.module.css";
import { Context } from "../../Context/Context.js";

export default function Sec5() {
  const { setbackgroundColor } = useContext(Context);

  return (
    <Stack className={styles.sec5}>
      <Box textAlign="center" className={styles.title}>
        <p>Check our articles</p>
      </Box>
      

      <Stack className={styles.hamada} >
       <Box className={styles.hamadad}>
       <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
       </Box>
      </Stack>

      <Box textAlign="center">
        <NavLink to="/articles" onClick={() => setbackgroundColor("#FFFFFF")}>
          <OutLineBtn />
        </NavLink>
      </Box>
    </Stack>
  );
}
