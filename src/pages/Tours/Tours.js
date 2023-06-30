import { Stack } from "@mui/system";
import React from "react";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import ToursCard from "../../components/ToursCard/ToursCard"
// import PagePagination from "../../components/Page_Pagination/PagePagination";
// import { useState } from "react";
// import { useEffect } from "react";

export default function Tours() {

  const Tour = [1 , 2 , 3 , 4 , 5 , 6] ;
  // const [image , setImage] = useState([]) ;

  // useEffect( () => {
  //   fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
  //     response => response.json().then( data => {
  //       setImage(data) ;
  //     })
  //   )
  // } , [])


  return (
    <PageOutLine value="Tours">
      <Stack flexDirection='row' justifyContent='center' flexWrap='wrap' >
        {Tour.map((value) => (
          <ToursCard id={value} key={value} />
        ))}
      </Stack>
      {/* <Stack>
        <PagePagination data = {image} />
      </Stack> */}
    </PageOutLine>
  );
}
