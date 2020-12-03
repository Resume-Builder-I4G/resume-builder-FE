import React from "react";

import About from "./components/About";
import Avatar from "./components/Avatar";
import Education from "./components/Education";
import Language from "./components/Languages";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Certificates from "./components/Certifcates";

// Styles imports
import {
  StyledResume,
  StyledResumeLeft,
  StyledResumeRight,
} from "./components/StyledComponents";
import "./Template_A.css";

function Template_A() {
  let languageItems = JSON.parse(localStorage.getItem("Languages"));
  let skillsItems = JSON.parse(localStorage.getItem("Skill"));
  let educationItems = JSON.parse(localStorage.getItem("Education"));
  let personalInfo = JSON.parse(localStorage.getItem("Personal_info"));
  let workExperience = JSON.parse(localStorage.getItem("Experience"));
  let certificateItems = JSON.parse(localStorage.getItem("Cerifications"));

  return (
    <div className="container-fluid" id="template-a">
      <StyledResume className="d-flex print">
        <StyledResumeLeft>
          <Avatar />
          <About about={personalInfo.about} />
          <Education educationItems={educationItems} />
          <Language languageItems={languageItems} />
          <Skills skillItems={skillsItems} />
        </StyledResumeLeft>

        <StyledResumeRight>
          <div className="top d-flex justify-content-between">
            <div className="right-left">
              <Header name={personalInfo.name} role={workExperience} />
            </div>
            <div className="right-right">
              <Contact contact={personalInfo} />
            </div>
          </div>
          <Experience experienceItems={workExperience} />
          <Certificates certificateItems={certificateItems} />
        </StyledResumeRight>
      </StyledResume>
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}

export default Template_A;
