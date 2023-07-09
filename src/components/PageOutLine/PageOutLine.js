import { Pagination, Stack } from "@mui/material";
import React, { useContext } from "react";
import filter from "../../images/Icons/Filter.png";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./PageOutLine.module.css";
import { Context } from "../Context/Context";

export default function PageOutLine({ children, value }) {
  const { setPageNum } = useContext(Context);

  const handleChange=(e,p)=>{
    setPageNum(p)
  }
 

  return (
    <Stack pt="120px" sx={{ backgroundColor: "white" }}>
      <Stack direction="row" gap="10px" flexWrap="wrap">
        <h1 className={styles.title}>{value}</h1>

        <Stack direction="row" gap="10px" className={styles.input}>
          <SearchInput />
          <img src={filter} alt="filter" className={styles.filterIcon} />
        </Stack>
      </Stack>
      {children}

      <Stack spacing={2} m="30px auto">
        <Pagination count={2} onChange={handleChange}/>
      </Stack>
    </Stack>
  );
}
