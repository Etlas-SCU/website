import React from "react";
import { Stack } from "@mui/material";

import Sec1 from "../../components/HomeSections/HomePage-sec1/Sec1";
import Sec2 from "../../components/HomeSections/HomePage-sec2/Sec2";
import Sec3 from "../../components/HomeSections/HomePage-sec3/Sec3";
import Sec5 from "../../components/HomeSections/HomePage-sec5/Sec5";
import Footer from "../../components/Footer/Footer";



export default function Home() {

  return (
    <Stack sx={{backgroundColor:"var(--mainColor)"}}>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      {/* sec4 */}
      <Sec5/>
      <Footer />
    </Stack >
  );
}
