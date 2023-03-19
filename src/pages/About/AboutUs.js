import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./About.module.css";
import png from "../../images/Pngs/about.png";
import face from "../../images/Icons/face.png";
import twitter from "../../images/Icons/twitter.png";
import linkedin from "../../images/Icons/linkedin.png";
import google from "../../images/Icons/google.png";
export default function AboutUs() {
  return (
    <Stack >
      <Stack className={styles.about} direction="row" flexWrap="wrap">
        <Box className={styles.lift_side} >
          <div className={styles.tri}></div>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.rotTit}>ETLAS</p>
        </Box>

        <Box className={styles.discreption}>
          <h2>Who are we?</h2>
          <p>
            We are a Computer Science students that graduated from faculty of
            computers and informatics Suez Canal university who wanted to make
            an E-Tourism application to make tourism more easy and also much fun
            to try and experience.
          </p>

          <h2>Purpose</h2>
          <p>
            Etlas purpose is to enhance the way tourists explore monuments and
            landmarks. The app is designed to provide tourists with an
            interactive and immersive experience, allowing them to discover new
            places and learn about their history and significance, also Etlas
            make it easier to tourists or foreigners to know about Egypt's
            history using the timeline feature or by articles, it also
            recommends popular-rated tours for the user to try.
          </p>

        </Box>

        <Box className={styles.png}>
          <img src={png} alt={png} />
        </Box>
      </Stack>

      <Box className={styles.linkes}>
        <p>you can find us on:</p>
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
        <p className={styles.copy_right}>© Etlas all rights reserved 2023</p>
    </Stack>
  );
}
