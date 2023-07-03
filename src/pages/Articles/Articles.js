import { Stack } from "@mui/material";
import React from "react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";

export default function Articles() {
  const { t } = useTranslation();
  const { Articles } =
  useContext(Context);

  return (
    <PageOutLine value={t("Articles.title")}>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mt="25px"
        >
          {Articles.map((article) => (
            <ArticlesCard article={article}/>
          ))}
        </Stack>
    </PageOutLine>
  );
}
