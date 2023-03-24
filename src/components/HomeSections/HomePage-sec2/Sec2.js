import React from "react";
import { Box, Stack } from "@mui/material";
import downLogo from "../../../images/Icons/downLogo.png";
import ContainedBtn from "../../containedBtn/ContainedBtn.js";
import { NavLink } from "react-router-dom";
import phone from "../../../images/Pngs/Phone.png";
import styles from "./Sec2.module.css";
import { useTranslation } from 'react-i18next';
export default function Sec2() {
  
  const { t } = useTranslation();
  
  return (
    <Stack className={styles.home__sec2}>
      <Box>
        <Box className={styles.home__sec2__RSide}>
          <img src={phone} alt="phone" />
        </Box>

        <Box className={styles.home__sec2__LSide}>
          <h2>{t('DownLoad.DownLoadSection.title')}</h2>
          <p className={styles.home__sec2__para}>{t('DownLoad.description')}  </p>

          <Box width="230px" className={styles.download_button}>
            <NavLink to="/download">
              <ContainedBtn>
                <span>{t('DownLoad.DownLoadSection.download')}</span>

                <img
                  alt="ay"
                  width="30px"
                  src={downLogo}
                  className={styles.download_icon}
                />
              </ContainedBtn>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
