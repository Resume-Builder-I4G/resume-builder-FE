import React from "react";
import {
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Language.css";

function Language() {
  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputLanguages">
                Langauges (%)
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputLanguages"
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

export default Language;
