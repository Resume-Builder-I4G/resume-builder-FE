import React from "react";
import {
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Skill.css";

function Skill() {
  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputSkills">Skills</StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputSkills"
                rows="8"
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <div className="buttons">
            <StyledPrev href="#">Back</StyledPrev>
            <StyledNext href="#">Next Section</StyledNext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
