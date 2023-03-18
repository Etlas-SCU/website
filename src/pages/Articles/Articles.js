import { Stack } from "@mui/material";
import React from "react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import PageOutLine from "../../components/PageOutLine/PageOutLine";

export default function Articles() {
  const hamada = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <PageOutLine value="Articles">
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {hamada.map((ind) => (
          <ArticlesCard id={ind} key={ind}/>
        ))}
      </Stack>
    </PageOutLine>
  );
}
