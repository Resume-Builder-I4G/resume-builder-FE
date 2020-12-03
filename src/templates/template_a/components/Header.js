import React from "react";
import { NameDiv, StyledH1, StyledResumeRole } from "./StyledComponents";

function Header({ name, role }) {
  return (
    <NameDiv>
      <StyledH1>{name || ""}</StyledH1>
      <StyledResumeRole>{role}</StyledResumeRole>
    </NameDiv>
  );
}

export default Header;
