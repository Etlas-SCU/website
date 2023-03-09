import React from "react";
import { Stack } from "@mui/material";

import Sec2 from "../../components/HomeSections/HomePage-sec2/Sec2";
import Sec1 from "../../components/HomeSections/HomePage-sec1/Sec1";


export default function Home() {

  return (
    <Stack>
      <Sec1/>
      <Sec2/>

    </Stack >
  );
}
