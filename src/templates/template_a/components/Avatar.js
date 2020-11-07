import React from "react";
import { StyledProfileImg, StylePicDiv } from "./StyledComponents";
import Image from "../../../assets/images/Olowookere-Emmanuel.jfif";

function Avatar({ avatar }) {
  return (
    <StylePicDiv className="text-center mb-4">
      <StyledProfileImg
        src={Image}
        alt="profile-img"
        width="100"
        height="100"
      />
    </StylePicDiv>
  );
}

export default Avatar;
