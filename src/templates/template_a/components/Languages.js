import React from "react";
import { StyledH2, StyledLlist } from "./StyledComponents";

function Languages({ languageItems }) {
  return (
    <div>
      <StyledH2>Languages</StyledH2>
      <ul>
        {languageItems.map((item) => {
          return (
            <StyledLlist key={item}>
              <span>{item || ""}</span> <span>{item || ""}</span>
            </StyledLlist>
          );
        })}
      </ul>
    </div>
  );
}

export default Languages;
