import React from "react";
import "./Create_resume.css";

import personalInfow from "../../assets/svgs/create-resume-img/personalinfoW.svg";
import educationInfo from "../../assets/svgs/create-resume-img/educationIcon.svg";
import workexperience from "../../assets/svgs/create-resume-img/workexperience.svg";
import language from "../../assets/svgs/create-resume-img/languageIcon.svg";
import certification from "../../assets/svgs/create-resume-img/certificationIcon.svg";
import achievement from "../../assets/svgs/create-resume-img/achievementIcon.svg";
import skills from "../../assets/svgs/create-resume-img/skillsIcon.svg";
import reference from "../../assets/svgs/create-resume-img/referenceIcon.svg";

const ResumeTabs = [
  { image: personalInfow, title: "Personal Info", alt: "personalinfoW" },
  { image: educationInfo, title: "Education", alt: "educationIcon" },
  { image: workexperience, title: "Work Experience", alt: "workexperience" },
  { image: language, title: "Languages", alt: "languageIcon" },
  { image: certification, title: "Certifications", alt: "certificationIcon" },
  { image: achievement, title: "Achievements", alt: "achievementIcon" },
  { image: skills, title: "Skills", alt: "skillsIcon" },
  { image: reference, title: "Reference", alt: "referenceIcon" },
];

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
