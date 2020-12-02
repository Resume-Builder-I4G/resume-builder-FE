import React from "react";
import {
  StyledExperienceDiv,
  StyledH2,
  CompanySpan,
  ExpDuration,
  ExpText,
} from "./StyledComponents";

function Experience({ experienceItems }) {
  return (
    <StyledExperienceDiv>
      <StyledH2>Work Experience</StyledH2>
      <ul>
        {experienceItems.map((item) => {
          return (
            <li
              style={{ marginBottom: "10px" }}
              key={`${item.company}+${item.startYear}`}
            >
              <div className="d-flex justify-content-between">
                <CompanySpan>{item.company || ""}</CompanySpan>
                <ExpDuration>
                  {`${item.startYear} - ${
                    item.endYear ? item.endYear : "Present"
                  }` || ""}
                </ExpDuration>
              </div>
              <ExpText>{item.title || ""}</ExpText>
              <ExpText>{`${item.city}, ${item.country}` || ""}</ExpText>
              <ExpText>{item.description || ""}</ExpText>
            </li>
          );
        })}
      </ul>
    </StyledExperienceDiv>
  );
}

export default Experience;
