import { Stack } from "@mui/material";
import React from "react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";
import { useEffect } from "react";

export default function Articles() {
  const { t } = useTranslation();
  const { Articles, setPageNum } =
  useContext(Context);
  
  useEffect(() => {
    setPageNum(1)
  }, [])

  return (
    <PageOutLine value={t("Articles.title")}>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mt="25px"
        >
          {Articles !== null ? Articles.map((article) => (
            <ArticlesCard key={article.id} id={article.id} article={article}/>
          )):(<div>no article</div>)}
        </Stack>
    </PageOutLine>
  );
}
