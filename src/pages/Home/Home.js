import { Box, Stack, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./Home.module.css";
import downLogo from "../../images/Icons/downLogo.png";
import ContainedBtn from "../../components/containedBtn/ContainedBtn";
import { NavLink } from "react-router-dom";
import phone from "../../images/Pngs/Phone.png";
import Statue2 from '../../images/Pngs/Statue2.png'
import App from '../../images/Pngs/AppStore.png'
import Play from '../../images/Pngs/PlayStore.png'
import Search from '../../images/Icons/Search.png'
// import { Context } from "../../components/Context/Context";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  // const { setbackgroundColor } = useContext(Context);

  return (
    <Stack>
      <Stack className={styles.home__sec1}>
        <Stack direction='row' className={styles.home_row} >
          <Box className={styles.home_col} >
            <Box>
              <p className={styles.home_title}>THE NEXT GENERATION OF TOURIST EXPLORATION IS HERE!</p>
              <p className={styles.home_prag}>Etlas is designed to revolutionize the way tourists explore new places. The app makes use of computer vision and augmented reality technologies to enhance the tourist experience by providing interactive and immersive experiences at famous landmarks and monuments.</p>
            </Box>
            <Stack className={styles.search} direction='row'>
              <input
                type='search'
                placeholder='Search for monuments, statues, landmarks and more!'
                name='search'
                className={styles.search_input} />
              <img src={Search} className={styles.search_icon} alt='search' />
            </Stack>
            <Stack className={styles.download_prag} direction='row'>
              For a better experience <span className={styles.download}> download </span> our App
            </Stack>
            <Stack className={styles.download_icons} direction='row'>
              <Button className={styles.download_btn}>
                <img src={Play} className={styles.playstore_img} alt='download-with-play-store' />
              </Button>
              <Button className={styles.download_btn}>
                <img src={App} className={styles.appstore_img} alt='download-with-app-store' />
              </Button>
            </Stack>
          </Box>
          <Box className={styles.img_col}>
            <img src={Statue2} className={styles.home_img} alt='etlas-home' />
          </Box>
        </Stack>
      </Stack>
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
    </Stack >
  );
}
