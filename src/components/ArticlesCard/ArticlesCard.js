import { Box } from "@mui/material";
import React from "react";
import article from "../../images/Pngs/article.png";
import styles from "./ArticlesCard.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function ArticlesCard({ id, className }) {
  return (
    <Box className={`${styles.cont} ${className}`}> 
      <Fade direction="left" triggerOnce="false">
        <Box className={styles.card}>
          <Box className={styles.card__img}>
            <img src={article} alt="article" />
          </Box>
          <Box width="90%" margin="0 auto">
            <h2 className={styles.card__name}>Anubis</h2>
            <p className={styles.card__about}>
              Know more about
              <br />
              Anubis and his powers.
            </p>
            <p className={styles.card__date}>15 Jan 2023</p>
            <Link to={`/articles/${id}`}>
              <p className={styles.card__more}>
                Learn more <KeyboardArrowRightIcon />
              </p>
            </Link>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
