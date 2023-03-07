import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./Home.module.css";
import downLogo from "../../images/Icons/downLogo.png";
export default function Home() {
  const [isHovering ,setIsHovering]=useState(false)
  return (
    <Stack>
      <Box className={styles.home__sec1}>
        {/* first section  */}
        The Next Generation of Tourist Exploration is here!The Next Generation
        of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here! is here! is here! is here! is here! is here! is
        here! is here! is here! is here! is here! is here! is here! is here! is
        here! is here! is here!
      </Box>

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
          <p>
            Etlas application let feel the full experience as it can be used to
            recognize monuments, statues and landmarks with a text-to-speech
            technology and make your trip/tour much easier and funnier to learn
            new historic information about your scanned object. You can also use
            your favorite object to appear in your camera using the AR
            technology.
          </p>
          <button className={styles.contBTn}
           onMouseOver={()=>setIsHovering(true)}
           onMouseLeave={()=>setIsHovering(false)}
        
          >
            {isHovering ? <img width="30px" src={downLogo} /> :  <p>Download Now!</p>}
            
            
          </button>
        </Box>
      </Stack>

      <Box>
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The Next Generation of Tourist
        Exploration is here!The Next Generation of Tourist Exploration is
        here!The Next Generation of Tourist Exploration is here!The Next
        Generation of Tourist Exploration is here!The N
      </Box>
    </Stack>
  );
}
