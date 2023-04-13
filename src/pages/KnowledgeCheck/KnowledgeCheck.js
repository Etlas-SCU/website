import { Box, Stack } from "@mui/material";
import React from "react";
import style from "./KnowledgeCheck.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";

export default function KnowledgeCheck() {
  const { categories } = useContext(Context);

  return (
    <Box pb="95px">
      <Box pt="120px">
        <h2 className={style.title}>Knowledge Check</h2>
      </Box>

      <Stack direction="row" justifyContent="center" gap="40px" flexWrap="wrap">
        {categories.map((cat) => {
          return (
            <Box className={style.cat} key={cat.id}>
              <Link to={`/knowledge/${cat.title}`}>
                <h4 className={style.cat__title}>{cat.title}</h4>
                <p className={style.cat__dis}>{cat.dis}</p>
                <Box className={style.cat__pan}>
                  <img src={cat.img} alt={cat.title} />
                  <p>{cat.score}</p>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
