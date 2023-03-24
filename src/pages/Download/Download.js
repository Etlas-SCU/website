import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./Download.module.css";
import play from "../../images/Pngs/PlayStore.png";
import app from "../../images/Pngs/AppStore.png";
import phone from "../../images/Pngs/phone (2).png";

export default function Download() {
  return (
    <Stack className={styles.down} sx={{ backgroundColor: "white" }}>
      <h1 className={styles.title}>Download</h1>
      <Box position="relative">
        <p className={styles.para}>
          Etlas application let feel the full experience as it can be used to
          recognize monuments, statues and landmarks with a text-to-speech
          technology and make your trip/tour much easier and funnier to learn
          new historic information about your scanned object. You can also use
          your favorite object to appear in your camera using the AR technology.
        </p>
      </Box>

      <Stack direction="row" className={styles.down__sec}>
        <Box borderRight="2px solid white">
          <p>if you’re Android download this version of Etlas.</p>
          <a href="#">
            <img src={play} alt="play" />
          </a>
        </Box>
        <Box>
          <p>if you’re IOS download this version of Etlas.</p>
          <a href="#">
            <img src={app} alt="app" />
          </a>
        </Box>
        <Box className={styles.dphone}>
          <img src={phone} alt="EG" className={styles.phone} />
        </Box>
      </Stack>

      <Box className={styles.copy_right}>© Etlas all rights reserved 2022</Box>
    </Stack>
  );
}
