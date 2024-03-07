import React from "react";
import B_SecondSection from "./B_SecondSection";
import D_FourthSection from "./D_FourthSecton";
import { Container } from "@mui/material";
import F_SixthSection from "./F_SixthSection";
import A_FirstSection1 from "./A_FirstSection1";

export default function HomePage() {
  return (
    <>
      <A_FirstSection1 />
      <Container maxWidth="lg">
        <B_SecondSection />
      </Container>
      <Container maxWidth="lg">
        <D_FourthSection />
      </Container>
      <F_SixthSection />
    </>
  );
}
