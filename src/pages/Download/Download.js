import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./Download.module.css";
import play from "../../images/Pngs/PlayStore.png";
import app from "../../images/Pngs/AppStore.png";
import phone from "../../images/Pngs/phone (2).png";
import { useTranslation } from 'react-i18next';
import e from "../../images/Pngs/e.png";


export default function Download() {
  const { t } = useTranslation();

  return (
    <Stack className={styles.down} sx={{ backgroundColor: "white" }}>
      <h1 className={styles.title}>Download</h1>
      <Box position="relative">
        <p className={styles.para}>
        {t('DownLoad.description')}
        </p>
      </Box>

      <img className={styles.e} src={e} alt="epng" />

      <Stack direction="row" className={styles.down__sec}>
        <Box borderRight="2px solid white">
          <p>{t('DownLoad.android')}</p>
          <a href="#">
            <img src={play} alt="play" />
          </a>
        </Box>
        <Box>
          <p>{t('DownLoad.IOS')}</p>
          <a href="#">
            <img src={app} alt="app" />
          </a>
        </Box>
        <Box className={styles.dphone}>
          <img src={phone} alt="EG" className={styles.phone} />
        </Box>
      </Stack>

      <Box className={styles.copy_right}>{t("copyRight")}</Box>
    </Stack>
  );
}
