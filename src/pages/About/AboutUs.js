import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./About.module.css";
import png from "../../images/Pngs/about.png";
import face from "../../images/Icons/face.png";
import twitter from "../../images/Icons/twitter.png";
import linkedin from "../../images/Icons/linkedin.png";
import google from "../../images/Icons/google.png";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack className={styles.about} direction="row" flexWrap="wrap">
        <Box className={styles.lift_side}>
          <div className={styles.tri}></div>
          <h1 className={styles.title}>{t("AboutUs.title")}</h1>
          <p className={styles.rotTit}>ETLAS</p>
        </Box>

        <Box className={styles.discreption}>
          <h2>{t("AboutUs.heading1")}</h2>
          <p>{t("AboutUs.description1")}</p>

          <h2>{t("AboutUs.heading2")}</h2>
          <p>{t("AboutUs.description2")}</p>
        </Box>

        <Box className={styles.png}>
          <img src={png} alt={png} />
        </Box>
      </Stack>

      <Box className={styles.linkes}>
        <p> {t("AboutUs.findUs")}</p>
        <Stack direction="row" gap="10px">
          <a href="#" alt="facebook">
            <img src={face} />
          </a>
          <a href="#" alt="twitter">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={google} alt="google" />
          </a>
        </Stack>
      </Box>
      <p className={styles.copy_right}>{t("copyRight")}</p>
    </Stack>
  );
}
