import { Box, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import styles from "./ArticleInfo.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addFav, delFav, getArticleById } from "../../repositories/articleRepo";

export default function ArticleInfo() {
  const [isClicked, setIsClicked] = useState(false);
  const [article, setArticle] = useState();
  const { id } = useParams();
  const { t } = useTranslation();

  function transformDateFormat(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const transformedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return transformedDate;
  }
  async function getArticle(id) {
    const result = await getArticleById(id);
    if (!result.isError) {
      setArticle(result.body);
    } else {
      console.log("Error fetching article");
    }
  }
  useEffect(() => {
    getArticle(id);
    console.log("hi");
  }, []);

  async function handleAddFav(jsonBody) {
    const result = await addFav(jsonBody);
    if (!result.isError) {
      console.log(result.body);
    } else {
      console.log(result.body);
    }
  }

  async function handleDelFav(jsonBody) {
    const result = await delFav(jsonBody);
    if (!result.isError) {
      console.log(result.body);
    } else {
      console.log(result.body);
    }
  }

  function favorite() {
    var jsonBody = {
      id: id,
    };
    if (!isClicked) {
      handleAddFav(jsonBody);
    } else {
      handleDelFav(jsonBody);
    }
    setIsClicked(!isClicked);
  }

  return (
    <Stack className={styles.artical__info} position="relative">
      {article ? (
        <>
          <img
            src={article.image_url}
            alt="imgInfo"
            className={styles.artImg}
          />

          <Box className={styles.info__sec2}>
            <Stack direction="row" justifyContent="space-between" mb="40px">
              <Box className={styles.cont}>
                <h2 className={styles.title}>{article.article_title}</h2>
                <p className={styles.date}>
                  {transformDateFormat(article.date)}
                </p>
              </Box>

              <Stack
                direction="row"
                justifyContent="space-between"
                className={styles.fav}
                alignItems="center"
              >
                <p>
                  {isClicked
                    ? t("Articles.ArticlesInfo.remove")
                    : t("Articles.ArticlesInfo.add")}
                  {t("Articles.ArticlesInfo.fav")}
                </p>
                <Tooltip title={isClicked ? "remove" : "add"}>
                  <button onClick={favorite}>
                    {isClicked ? (
                      <FavoriteIcon fontSize="large" className={styles.Icon} />
                    ) : (
                      <FavoriteBorderIcon
                        fontSize="large"
                        className={styles.Icon}
                      />
                    )}
                  </button>
                </Tooltip>
              </Stack>
            </Stack>
            <Box className={styles.description}>
              <p>
                {article.description}
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>{article.sections[0].section_title}</h3>
                <div>{article.sections[0].description}</div> <br />
                <br />
                <h3>{article.sections[1].section_title}</h3>
                <div>{article.sections[1].description}</div> <br />
                <br />
                <h3>{article.sections[2].section_title}</h3>
                <div>{article.sections[2].description}</div> <br />
                <br />
              </p>
            </Box>
          </Box>
        </>
      ) : (
        <Box width="20%" margin="300px auto">
          <h1>loading...</h1>
        </Box>
      )}
    </Stack>
  );
}
