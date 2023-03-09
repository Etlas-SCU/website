import React from 'react'
import { Box, Stack } from "@mui/material";
import  {  useState } from "react";
import downLogo from "../../../images/Icons/downLogo.png";
import ContainedBtn from "../../containedBtn/ContainedBtn.js"
import { NavLink } from "react-router-dom";
import phone from "../../../images/Pngs/Phone.png";
import styles from "./Sec2.module.css"

export default function Sec2() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Stack className={styles.home__sec2}>
    <Box>
      <Box className={styles.home__sec2__RSide}>
        <img src={phone} alt="phone" />
      </Box>

      <Box className={styles.home__sec2__LSide} >
        <h2>Why our Application?</h2>
        <p className={styles.home__sec2__para}>
          Etlas application let feel the full experience as it can be used
          to recognize monuments, statues and landmarks with a
          text-to-speech technology and make your trip/tour much easier and
          funnier to learn new historic information about your scanned
          object. You can also use your favorite object to appear in your
          camera using the AR technology.
        </p>

        <Box
          width="230px"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

          <NavLink to="/download">
            <ContainedBtn>
              {isHovering ? (
                <img alt="ay" width="30px" src={downLogo} />
              ) : (
                <p >Download Now!</p>
              )}
            </ContainedBtn>
          </NavLink>
        </Box>
      </Box>
    </Box>
  </Stack>

  )
}
