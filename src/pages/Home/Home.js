import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./Home.module.css";
import downLogo from "../../images/Icons/downLogo.png";
import ContainedBtn from "../../components/containedBtn/ContainedBtn";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Stack>
      <Box className={styles.home__sec1}>{/* first section  */}</Box>

      <Stack direction="row-reverse" className={styles.home__sec2}>
        <Box>
          <Box
            width="300px"
            height="250px"
            borderRadius="20px"
            sx={{ background: "#8080807d" }}
            className={styles.hamada}
          ></Box>
        </Box>
        <Box width="60%">
          <h2>Why our Application?</h2>
          <p className={styles.sec2__para}>
            Etlas application let feel the full experience as it can be used to
            recognize monuments, statues and landmarks with a text-to-speech
            technology and make your trip/tour much easier and funnier to learn
            new historic information about your scanned object. You can also use
            your favorite object to appear in your camera using the AR
            technology.
          </p>

          <Box width="230px"
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <ContainedBtn>
              {isHovering ? (
                <img alt="ay" width="30px" src={downLogo} />
              ) : (
                <p style={{paddingTop:"7px"}}>Download Now!</p>
              )}
            </ContainedBtn>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
