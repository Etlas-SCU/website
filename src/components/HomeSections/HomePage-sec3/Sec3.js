import React, { useContext, useState } from "react";
import styles from "./Sec3.module.css";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/material";
import { Context } from "../../Context/Context";
import arrow from "../../../images/Icons/Know History Arrow.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


export default function Sec3() {
  const { t } = useTranslation();
  const { timeLineSections } = useContext(Context);
  const [currIndx, setcurrIndx] = useState(0);

  const slider = timeLineSections.map((sec) => {
    return (
      <Stack className={styles.slider} key={sec.id}>
        <Stack direction="row">
          <Box className={styles.imgCont}>
            <Fade>
              <img
                src={sec.img}
                alt={sec.title}
                className={styles.slider__img}
              />
            </Fade>
          </Box>

          <Stack direction="column" className={styles.disCont}>
            <Fade direction="left">
              <p className={styles.slider__title}>{sec.title}</p>
              <p className={styles.slider__dis}>{sec.description}</p>
            </Fade>
          </Stack>
        </Stack>

       
        <Link to={`/know_history#${sec.id}`}>
         <Fade>
         <button className={styles.slider__btn}>
            <p>{t("timeLine.timeLineSection.btnText")}</p>
            <ArrowForwardIcon
              sx={{ display: "none" }}
              className={styles.contArrow}
            />
          </button>
         </Fade>
        </Link>
      </Stack>
    );
  });

  const timline = timeLineSections.map((sec) => {
    return (
      <Stack direction="row" alignItems="center" key={sec.id}>
        <Box className={styles.timeLineDot}>
          <Box
            className={currIndx === sec.id - 1 ? styles.circle : "none"}
          ></Box>
        </Box>
        <Box className={styles.TimelineConnector}></Box>
      </Stack>
    );
  });

  function handleClickPrev() {
    setcurrIndx((currIndx - 1 + slider.length) % slider.length);
  }

  function handleClickNext() {
    setcurrIndx((currIndx + 1) % slider.length);
  }

  return (
    <Box mb="100px">
      <Box className={styles.title}>
        <p>{t("timeLine.timeLineSection.title")}</p>
      </Box>

      <Stack direction="row" margin="0 auto 50px" width="fit-content">
        {timline}
      </Stack>

      <Box className={styles.date}>
        <p>200 BC | Ancient Egypt (Osiris Kingdom)</p>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center">
        <Box>
          <img
            src={arrow}
            className={`${styles.arrow} ${styles.prevArrow}`}
            onClick={handleClickPrev}
            alt="prev"
          />
        </Box>
        {slider[currIndx]}
        <Box>
          <img
            src={arrow}
            className={styles.arrow}
            onClick={handleClickNext}
            alt="next"
          />
        </Box>
      </Stack>
    </Box>
  );
}
