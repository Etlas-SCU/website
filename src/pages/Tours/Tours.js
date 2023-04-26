import { Stack } from "@mui/system";
import React from "react";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import ToursCard from "../../components/ToursCard/ToursCard"

export default function Tours() {

  const Tour = [1 , 2 , 3 , 4 , 5 , 6] ;

  return (
    <PageOutLine value="Tours">
      <Stack flexDirection='row' justifyContent='center' flexWrap='wrap' >
        {Tour.map((value) => (
          <ToursCard id={value} key={value} />
        ))}
      </Stack>
    </PageOutLine>
  );
}
