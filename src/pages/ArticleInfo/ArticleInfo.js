import { Box, Stack, Tooltip } from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./ArticleInfo.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addFav, delFav, getArticleById, isFavorite } from "../../repositories/articleRepo";
import MPopUp from "../../components/PopUp_Message/error/MPopUp";
import { Context } from "../../components/Context/Context";

export default function ArticleInfo() {
  const [isClicked, setIsClicked] = useState(false);
  const [article, setArticle] = useState();
  const { id } = useParams();
  const { t } = useTranslation();
  const { setMassagePopup } = useContext(Context);
  const [popup, setPopup] = useState(null);
  const [Loading, setLoading] = useState(false);

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
  async function isFav() {
    var jsonBody={
      article_id:id
    }
    const result = await isFavorite(jsonBody);
    if (!result.isError) {
      setIsClicked(result.body.is_favorite);
    } else {
      console.log(result.body);
    }
  }

  useEffect(() => {
    getArticle(id);
    isFav()
  }, []);

  
  async function handleAddFav(jsonBody) {
    setLoading(true)
    const result = await addFav(jsonBody);
    setLoading(false)
    if (!result.isError) {
      setMassagePopup(true);
      setPopup(<MPopUp type="done">the article added to your favorite</MPopUp>);
    } else {
      setMassagePopup(true);
      setPopup(<MPopUp type="error">{result.body.response.data.detail} </MPopUp>);
    }
  }

  async function handleDelFav(id) {
    setLoading(true)
    const result = await delFav(id);
    setLoading(false)
    if (!result.isError) {
      setMassagePopup(true);
      setPopup(<MPopUp type="done">the article removed from your favorite</MPopUp>);
    } else {
      setMassagePopup(true);
      setPopup(<MPopUp type="error">{result.body.response.data.detail} </MPopUp>);
    }
  }

  function favorite() {
    var jsonBody = {
      id: id,
    };
    if (isClicked === false) {
      handleAddFav(jsonBody);
    } else {
      handleDelFav(id);
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
                  { isClicked === true
                    ? t("Articles.ArticlesInfo.remove")
                    : t("Articles.ArticlesInfo.add")}
                  {t("Articles.ArticlesInfo.fav")}
                </p>
                <Tooltip title={ isClicked === true? "remove" : "add"}>
                  <button onClick={favorite} disabled={Loading}>
                    { isClicked === true? (
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
