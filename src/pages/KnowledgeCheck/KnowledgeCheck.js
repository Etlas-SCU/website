import { Box, Skeleton, Stack } from "@mui/material";
import React ,{useContext,useState,useEffect} from "react";
import style from "./KnowledgeCheck.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../components/Context/Context";

export default function KnowledgeCheck() {
  const { categories } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
                  {isLoading ? (
                    <Stack direction="column">
                      <Skeleton
                        variant="rectangular"
                        className={style.Skeleton1}
                      />
                      <Skeleton variant="rectangular" width="100%" height={200}/>
                    </Stack>
                  ) : (
                    <>
                      <img src={cat.img} alt={cat.title} />
                      <p>{cat.score}</p>
                    </>
                  )}
                </Box>
              </Link>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
