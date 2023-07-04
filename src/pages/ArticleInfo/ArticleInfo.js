import { Box, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import styles from "./ArticleInfo.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addFav, delFav, getArticleById } from "../../repositories/articleRepo";
import MPopUp from "../../components/PopUp_Message/error/MPopUp";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";

export default function ArticleInfo() {
  const [isClicked, setIsClicked] = useState(false);
  const [article, setArticle] = useState();
  const [popup, setPopup] = useState(null);
  const { setMassagePopup } = useContext(Context);
  const { id } = useParams();
  const { t } = useTranslation();

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
      setMassagePopup(true);
      setPopup(
        <MPopUp type="done">{result.body.response.data.massage}</MPopUp>
      );
    } else {
      setMassagePopup(true);
      setPopup(
        <MPopUp type="error">{result.body.response.data.massage}</MPopUp>
      );
    }
  }

  async function handleDelFav(jsonBody) {
    const result = await delFav(jsonBody);
    if (!result.isError) {
      setMassagePopup(true);
      setPopup(<MPopUp type="done">{result.body.response.data.detail}</MPopUp>);
    } else {
      setMassagePopup(true);
      setPopup(
        <MPopUp type="error">{result.body.response.data.detail}</MPopUp>
      );
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
      {popup}
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
                <p className={styles.date}>{article.date}</p>
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
