import React, { useState, useEffect } from "react";
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
    event.preventDefault();
    console.log(skill);
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
