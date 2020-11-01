import React from "react";
import { Link, Router } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Create_resume.css";
import ResumeTabs from "./Create_resume_data";
import ENavbar from "../../components/resume_editing_navbar/ENavbar";

const Create_resume = () => {
  return (
    <div>
      <ENavbar />
      <div class="row">
        <div className="col-4">
          <div className="sidebar">
            <div className="contain">
              {ResumeTabs.map((resumetab) => {
                return (
                  <Link to={`/new-resume/${resumetab.path}`}>
                    <div className="option">
                      <img src={resumetab.image} alt={resumetab.alt} />
                      <p>{resumetab.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-8"></div>
      </div>
    </div>
  );
};

export default Create_resume;
