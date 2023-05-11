import React from "react";
import { Box, Stack } from "@mui/material";
import downLogo from "../../../images/Icons/downLogo.png";
import ContainedBtn from "../../containedBtn/ContainedBtn.js";
import { NavLink } from "react-router-dom";
import phone from "../../../images/Pngs/Phone.png";
import styles from "./Sec2.module.css";
import { useTranslation } from 'react-i18next';
import { Fade, Zoom } from "react-awesome-reveal";


export default function Sec2() {
  
  const { t } = useTranslation();
  
  return (
    <Stack className={styles.home__sec2}>
      <Box>
        <Box className={styles.home__sec2__RSide}>
          <img src={phone} alt="phone" />
        </Box>

        <Box className={styles.home__sec2__LSide}>
          <Fade direction="top">
          <h2>{t('DownLoad.DownLoadSection.title')}</h2>
          <p className={styles.home__sec2__para}>{t('DownLoad.description')}  </p>
          </Fade>

          <Box width="230px" className={styles.download_button}>
            <Zoom>
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
            </Zoom>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
