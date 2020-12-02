import React from "react";
import { StyledProfileImg, StylePicDiv } from "./StyledComponents";

function Avatar({ avatar }) {
  const hero = "https://via.placeholder.com/100";
  return (
    <StylePicDiv className="text-center mb-4">
      <StyledProfileImg src={hero} alt="profile-img" width="100" height="100" />
    </StylePicDiv>
  );
}

export default Avatar;
