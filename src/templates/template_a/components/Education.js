import React from "react";
import {
  StyledEDuration,
  StyledEInformation,
  StyledELocation,
  StyledH2,
  StyledH3,
  StyledInstitution,
} from "./StyledComponents";

function Education({ educationItems }) {
  return (
    <div>
      <StyledH2>Education</StyledH2>
      {educationItems.map((item) => {
        return (
          <div key={item.course}>
            <StyledH3>{item.course}</StyledH3>
            <StyledInstitution>{item.institution}</StyledInstitution>
            <StyledELocation>{item.country}</StyledELocation>
            <StyledEInformation>{item.information}</StyledEInformation>
            <StyledEDuration>
              {item.startYear} - {item.endYear}
            </StyledEDuration>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
