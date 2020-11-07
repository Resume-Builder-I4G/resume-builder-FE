import React from "react";
import { StyledH2 } from "./StyledComponents";

function Experience({ experienceItems }) {
  return (
    <div>
      <StyledH2>Work Experience</StyledH2>
      <ul>
        {experienceItems.map((item) => {
          return (
            <li>
              <div className="d-flex justify-content-between">
                <span>{item.company}</span>
                <span>{`${item.startYear} - ${item.endYear}`}</span>
              </div>
              <p className="title">{item.title}</p>
              <p className="city">{`${item.city}, ${item.country}`}</p>
              <p className="description">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
