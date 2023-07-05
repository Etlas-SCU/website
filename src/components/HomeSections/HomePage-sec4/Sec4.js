import { Stack, Box } from "@mui/material";
import React from "react";
import Style from "./Sec4.module.css";
import ToursCard from "../../ToursCard/ToursCard";
import { NavLink } from "react-router-dom";
import OutLineBtn from "../../outLineBtn/OutLineBtn";
import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Sec4(props) {
  const { Tours } = useContext(Context);
  return (
    <Stack className={Style.sec4}>
      <Box className={Style.title}>
        <p>Check popular tours</p>
      </Box>
      <Stack className={Style.tours_cards}>
        <Box className={Style.tours}>
          {Tours !== null ? (
            Tours.map((tour) => (
              <ToursCard
                key={tour.id}
                id={tour.id}
                tour={tour}
                className={Style.cards}
              />
            ))
          ) : (
            <div>no tours</div>
          )}
        </Box>
      </Stack>
      <Box>
        <NavLink to="/tours">
          <OutLineBtn className={Style.see_more} value={"See more!"} />
        </NavLink>
      </Box>
    </Stack>
  );
}
