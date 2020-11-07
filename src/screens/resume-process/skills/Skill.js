import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Skill.css";

function Skill() {
  let initSkills;
  const [skill, setSkill] = useState(initSkills);

  const submitHandler = (event) => {
    let skillSplit = skill.split(",");
    const skillList = skillSplit;
    localStorage.setItem("Skill", JSON.stringify(skillList));
    // let bigToken = JSON.parse(localStorage.getItem("tokens"));
    // const token = bigToken.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // event.preventDefault();
    // axios
    //   .post(
    //     "https://resume-builder-i4g.herokuapp.com/skills",
    //     {
    //       name: skill,
    //       level: 3, //varEmail is a variable which holds the email
    //     },
    //     config
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const getSkills = () => {
    initSkills = localStorage.getItem("Skill");
    console.log(initSkills);
    // let bigToken = JSON.parse(localStorage.getItem("tokens"));
    // const token = bigToken.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // axios
    //   .get("https://resume-builder-i4g.herokuapp.com/skills", config)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  getSkills();
  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form onSubmit={submitHandler}>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputSkills">Skills</StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputSkills"
                rows="8"
                defaultValue={initSkills}
                value={skill}
                placeholder={initSkills}
                onChange={(event) => setSkill(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <div className="buttons">
            <Link to="/new-resume/achivements">
              <StyledPrev type="submit" onClick={submitHandler} href="#">
                Back
              </StyledPrev>
            </Link>
            <Link to="/new-resume/references">
              <StyledNext type="submit" onClick={submitHandler} href="#">
                Next Section
              </StyledNext>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
