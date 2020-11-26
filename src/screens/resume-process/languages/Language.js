import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
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
    <>
      <div id="languages" className="container-fluid content">
        <div className="previewndownload-wrap">
          <PreviewDownload />
        </div>
        <MainContent className="main-content-body">
          <p className="head-languages">Language</p>
          <form onSubmit={submitHandler}>
            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputLanguages">
                Langauges (%)
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control languages-box"
                id="inputLanguages"
                rows="8"
                defaultValue={initLang}
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <Buttons className="nextnprev-btn-container">
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
    </>
  );
}

export default Language;
