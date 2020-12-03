import React from "react";
import { StyledH2, StyledLlist } from "./StyledComponents";

function Languages({ languageItems }) {
  return (
    <div>
      <StyledH2>Languages</StyledH2>
      <ul>
        {languageItems &&
          languageItems.map((item) => {
            return (
              <StyledLlist key={item}>
                <span>{item}</span>
              </StyledLlist>
            );
          })}
      </ul>
    </div>
  );
}

export default Languages;
