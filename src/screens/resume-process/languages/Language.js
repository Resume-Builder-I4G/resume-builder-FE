import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Buttons,
  MainContent,
  StyledInputForm,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Language.css";

function Language() {
  let initLang;
  const [language, setLanguage] = useState(initLang);

  const submitHandler = (event) => {
    event.preventDefault();
    if (language) {
      let langSplit = language.split(",");
      const langList = langSplit;
      localStorage.setItem("Languages", JSON.stringify(langList));
    }
  };

  const getLanguages = () => {
    initLang = localStorage.getItem("Languages");
    console.log(initLang);
  };

  // getLanguages();

  return (
    <div className="container-fluid content">
      <div className="row">
        <MainContent className="col-12">
          <form onSubmit={submitHandler}>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputLanguages">
                Langauges (%)
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control"
                id="inputLanguages"
                rows="8"
                defaultValue={initLang}
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <Buttons>
            <StyledPrev type="submit" onClick={submitHandler} href="#">
              <Link to="/new-resume/experience">Back</Link>
            </StyledPrev>
            <StyledNext type="submit" onClick={submitHandler} href="#">
              <Link to="/new-resume/certifications" className="text-white">
                Next Section
              </Link>
            </StyledNext>
          </Buttons>
        </MainContent>
      </div>
    </div>
  );
}

export default Language;
