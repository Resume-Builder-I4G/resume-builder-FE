import React, { useState, useEffect } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import ENavbar from "../resume_editing_navbar/ENavbar";
import "./Create_resume.css";
import ResumeTabs from "../../screens/create-resume-process/Create_resume_data";
import Personal_info from "../../screens/create-resume-process/resume-process/Personal-info/Personal_info";
import Education from "../../screens/create-resume-process/resume-process/Education/Education";
import { MenuConsumer } from "../../screens/create-resume-process/resume-process/menuContext";

function SideNav(props) {
  return (
    <div>
      <div className="contain">
        {ResumeTabs.map((resumetab) => {
          console.log(props.menu);
          return (
            <Link to={resumetab.path}>
              <div className={`${props.menu} option`}>
                <img src={resumetab.image} alt={resumetab.alt} />
                <p>{resumetab.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
