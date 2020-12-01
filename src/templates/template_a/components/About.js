import React from "react";
import { StyledAboutText, StyledH2 } from "./StyledComponents";

function About({ about }) {
  return (
    <div>
      <StyledH2>About</StyledH2>
      <StyledAboutText>{about || ""}</StyledAboutText>
    </div>
  );
}

export default About;
