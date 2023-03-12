import { Box} from "@mui/material";
import React, { useContext } from "react";
import article from "../../images/Pngs/article.png";
import styles from "./ArticlesCard.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import { Context } from "../../components/Context/Context";


export default function ArticlesCard({id}) {
  const { setbackgroundColor } = useContext(Context);

  return (
    
    <Box className={styles.card}>
        <Box >
        <img src={article} className={styles.card__img} />
        </Box>
       <Box ml="15px">
       <h2 className={styles.card__name}>Anubis</h2>
        <p className={styles.card__about}>
          Know more about
          <br />
          Anubis and his powers.
        </p>
        <p className={styles.card__date}>15 Jan 2023</p>
        
        <Link to={`/articles/${id}`} style={{textDecoration:"none", color:"white"}} onClick={() => setbackgroundColor("#FFFFFF")}>

        <p className={styles.card__more}>Learn more <KeyboardArrowRightIcon/></p>

        </Link>

       </Box>
      </Box>
    
  );
}
