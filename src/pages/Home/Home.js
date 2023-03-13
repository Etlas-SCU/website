import React from "react";
import { Stack } from "@mui/material";

import Sec2 from "../../components/HomeSections/HomePage-sec2/Sec2";
import Sec1 from "../../components/HomeSections/HomePage-sec1/Sec1";
import Sec5 from "../../components/HomeSections/HomePage-sec5/Sec5";
import Sec6 from "../../components/HomeSections/HomePage-sec6/Sec6";



export default function Home() {

  return (
    <Stack>
      <Sec1/>
      <Sec2/>
      {/* sec3 */}
      {/* sec4 */}
      <Sec5/>
      <Sec6 />
    </Stack >
  );
}
