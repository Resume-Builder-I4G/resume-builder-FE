import React from "react";
import "./Create_resume.css";
import ResumeTabs from "./Create_resume_data";

const Create_resume = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="contain">
          {ResumeTabs.map((resumetab) => {
            return (
              <div className="option">
                <img src={resumetab.image} alt={resumetab.alt} />
                <p>{resumetab.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Create_resume;
