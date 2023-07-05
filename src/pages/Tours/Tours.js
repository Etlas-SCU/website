import { Stack } from "@mui/system";
import React, { useContext } from "react";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import ToursCard from "../../components/ToursCard/ToursCard";
import { Context } from "../../components/Context/Context";
// import PagePagination from "../../components/Page_Pagination/PagePagination";
// import { useState } from "react";
// import { useEffect } from "react";

export default function Tours() {
  const { Tours } = useContext(Context);
  console.log(Tours);
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
      <Stack flexDirection="row" justifyContent="center" flexWrap="wrap">
        {Tours !== null ? (
          Tours.map((tour) => (
            <ToursCard key={tour.id} id={tour.id} tour={tour} />
          ))
        ) : (
          <div>no tours</div>
        )}
      </Stack>
      {/* <Stack>
        <PagePagination data = {image} />
      </Stack> */}
    </PageOutLine>
  );
}
