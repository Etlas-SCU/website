import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ArticlesCard from "../../ArticlesCard/ArticlesCard.js";
import OutLineBtn from "../../outLineBtn/OutLineBtn.js";
import styles from "./Sec5.module.css";
import { useTranslation } from "react-i18next";
import { Context } from "../../Context/Context.js";

export default function Sec5() {
  const { t } = useTranslation();
  const { Articles } =
  useContext(Context); 
  return (
    <Stack className={styles.sec5}>
      <Box className={styles.title}>
        <p>{t("Articles.ArticlesSection.title")}</p>
      </Box>

      <Stack className={styles.cont}>
        <Box className={styles.cards}>
         {Articles !== null ? Articles.map((article) => (
            <ArticlesCard key={article.id} id={article.id} article={article} className={styles.card}/>
          )):(<div>no article</div>)}
          
        </Box>
      </Stack>

      <Box textAlign="center">
        <NavLink to="/articles">
          <OutLineBtn value={t("Articles.ArticlesSection.seeMore")} />
        </NavLink>
      </Box>
    </Stack>
  );
}
