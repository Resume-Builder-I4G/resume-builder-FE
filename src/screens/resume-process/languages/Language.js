import React, { useState, useEffect } from "react";
import {
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Language.css";

function Language() {
  const [language, setLanguage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(language);
  };

  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form onSubmit={submitHandler}>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputLanguages">
                Langauges (%)
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputLanguages"
                rows="8"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
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

export default Language;
