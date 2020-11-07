import React from "react";
import { StyledProfileImg } from "./StyledComponents";

function Avatar({ avatar }) {
  return (
    <div>
      <StyledProfileImg src={avatar} alt="profile-img" />
    </div>
  );
}

export default Avatar;
