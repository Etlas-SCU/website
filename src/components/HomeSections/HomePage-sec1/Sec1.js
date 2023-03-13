import React from 'react'
import { Box, Stack, Button } from "@mui/material";
import styles from "./Sec1.module.css";
import Statue2 from '../../../images/Pngs/Statue2.png'
import App from '../../../images/Pngs/AppStore.png'
import Play from '../../../images/Pngs/PlayStore.png'
import SearchInputt from '../../SearchInput/SearchInput.js'

export default function Sec1() {
  return (
    <Stack className={styles.home__sec1}>
      <Stack direction='row' className={styles.home_row} >
        <Box className={styles.home_col}>
          <Box >
            <p className={styles.home_title}>THE NEXT GENERATION OF TOURIST EXPLORATION IS HERE!</p>
            <p className={styles.home_prag}>Etlas is designed to revolutionize the way tourists explore new places. The app makes use of computer vision and augmented reality technologies to enhance the tourist experience by providing interactive and immersive experiences at famous landmarks and monuments.</p>
          </Box>

          <SearchInputt/>

          <Stack className={styles.download_prag} direction='row' >
            For a better experience <span className={styles.download}> download </span> our App
          </Stack>
          <Stack className={styles.download_icons} direction='row' gap='10px'>
            <a href='##' className={styles.download_btn}>
              <img src={Play} className={styles.playstore_img} alt='download-with-play-store' />
            </a>
            <a href='##' className={styles.download_btn}>
              <img src={App} className={styles.appstore_img} alt='download-with-app-store' />
            </a>
          </Stack>
        </Box>
        <Box className={styles.img_col} width='45%'>
          <img src={Statue2} className={styles.home_img} alt='etlas-home' />
        </Box>
      </Stack>
    </Stack>

  )
}
