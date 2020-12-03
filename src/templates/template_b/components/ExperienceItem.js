import React from "react";

function ExperienceItem() {
  return (
    <div className="experience-item">
      <div className="companynlocation d-flex">
        <h3>{}</h3>
        <p className="company__location">{}</p>
      </div>
      <div className="rolenyear d-flex">
        <p className="role"></p>
        <p className="year"></p>
      </div>
      <div className="experience__description"></div>
    </div>
  );
}

export default ExperienceItem;
