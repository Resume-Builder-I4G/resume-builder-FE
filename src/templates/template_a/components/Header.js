import React from "react";
import { StyledH1, StyledResumeRole } from "./StyledComponents";

function Header({ name, role }) {
  return (
    <>
      <StyledH1>{name}</StyledH1>
      <StyledResumeRole>UI/UX Designer</StyledResumeRole>
    </>
  );
}

export default Header;
