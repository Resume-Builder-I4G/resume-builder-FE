import React from "react";

import ExperienceItem from "./ExperienceItem";
import { StyleH2 } from "./StyledComponents";

function Experience({ Experience }) {
  return (
    <div>
      <StyleH2>PROFESSIONAL EXPERIENCE</StyleH2>

      <ExperienceItem />
    </div>
  );
}

export default Experience;
