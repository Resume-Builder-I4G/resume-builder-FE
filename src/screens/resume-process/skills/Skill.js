import React, { useState, useEffect } from "react";
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
  const [skill, setSkill] = useState("");

  const submitHandler = (event) => {
    let varData = JSON.parse(localStorage.getItem("tokens"));
    console.log(varData.token);
    let varToken = JSON.stringify(varData);
    console.log(varToken);
    event.preventDefault();
    axios
      .post(
        "https://resume-builder-i4g.herokuapp.com/skills",
        {
          name: skill,
          level: 3, //varEmail is a variable which holds the email
        },
        {
          headers: {
            Authorization: `Bearer ${varData}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                value={skill}
                onChange={(event) => setSkill(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <div className="buttons">
            <StyledPrev type="submit" onClick={submitHandler} href="#">
              Back
            </StyledPrev>
            <StyledNext type="submit" onClick={submitHandler} href="#">
              Next Section
            </StyledNext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
