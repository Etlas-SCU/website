import { Box} from "@mui/material";
import React from "react";
import article from "../../images/Pngs/article.png";
import styles from "./ArticlesCard.module.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";


export default function ArticlesCard({id}) {

  return (
    
    <Box className={styles.card}>
        <Box >
        <img src={article} className={styles.card__img} alt="article"/>
        </Box>
       <Box ml="15px">
       <h2 className={styles.card__name}>Anubis</h2>
        <p className={styles.card__about}>
          Know more about
          <br />
          Anubis and his powers.
        </p>
        <p className={styles.card__date}>15 Jan 2023</p>
        
        <Link to={`/articles/${id}`} style={{textDecoration:"none", color:"white"}}>

        <p className={styles.card__more}>Learn more <KeyboardArrowRightIcon/></p>

        </Link>

       </Box>
      </Box>
    
  );
}
