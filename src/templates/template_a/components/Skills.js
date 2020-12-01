import React from "react";
import { StyledH2, StyledSlist } from "./StyledComponents";

function Skills({ skillItems }) {
  return (
    <div>
      <StyledH2>Skills</StyledH2>
      <ul>
        {skillItems.map((item) => {
          return <StyledSlist key={item}>{item || ""}</StyledSlist>;
        })}
      </ul>
    </div>
  );
}

export default Skills;
