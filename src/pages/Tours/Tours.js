import { Stack } from "@mui/system";
import React, { useContext } from "react";
import PageOutLine from "../../components/PageOutLine/PageOutLine";
import ToursCard from "../../components/ToursCard/ToursCard";
import { Context } from "../../components/Context/Context";

export default function Tours() {
  const { Tours } = useContext(Context);
  console.log(Tours);

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
    </PageOutLine>
  );
}
