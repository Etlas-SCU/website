import { Box, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ArticlesCard from "../../ArticlesCard/ArticlesCard.js";
import OutLineBtn from "../../outLineBtn/OutLineBtn.js";
import styles from "./Sec5.module.css";
import { useTranslation } from 'react-i18next';


export default function Sec5() {
  const { t } = useTranslation();

  return (
    <Stack className={styles.sec5}>
      <Box textAlign="center" className={styles.title}>
        <p>{t('Articles.ArticlesSection.title')}</p>
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
          <OutLineBtn value={t('Articles.ArticlesSection.seeMore')}/>
        </NavLink>
      </Box>
    </Stack>
  );
}
