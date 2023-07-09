import { Box, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./ArticlesCard.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function ArticlesCard({ id, className ,article}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Box className={`${styles.cont} ${className}`}>
      <Fade direction="left" triggerOnce="false">
        <Box className={styles.card}>
          <Box className={styles.card__img}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                className={styles.ImgSkeleton}
              />
            ) : (
              <img src={article.image_url} alt="article" />
            )}
          </Box>
          <Box width="90%" margin="0 auto">
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </>
            ) : (
              <>
                <h2 className={styles.card__name}>{article.article_title}</h2>
                <p className={styles.card__about}>
                  {article.description}
                </p>
                <p className={styles.card__date}>{article.date}</p>
                <Link to={`/articles/${id}`}>
                  <p className={styles.card__more}>
                    Learn more <KeyboardArrowRightIcon />
                  </p>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}