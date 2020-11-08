import React, { useState, useEffect } from "react";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledNext,
  StyledPrev,
  StyledAddItemText,
  StyledAddItemWrap,
  Buttons,
  MainContent,
} from "../StyledComponents";
import "./Cerifications.css";
import { Link } from "react-router-dom";

function Certifications() {
  const [certName, setCertName] = useState("");
  const [certYear, setCertYear] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const certificationObj = {
      name: certName,
      year: certYear,
    };

    const certificationItems = [];
    certificationItems.push(certificationObj);
    localStorage.setItem("Cerifications", JSON.stringify(certificationItems));
  };
  return (
    <div className="container-fluid content">
      <MainContent className="col col-md-12 col-xs-6">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <StyledInputForm className="form-group col-md-8">
              <StyledInputLabel for="cert">Certificate</StyledInputLabel>
              <StyledInputInput
                style={{ width: "98%" }}
                type="text"
                name="certificate"
                placeholder="e.g Figma Ambassador"
                className="input-cert first"
                id="cert"
                onChange={(event) => setCertName(event.target.value)}
              />
            </StyledInputForm>
            <StyledInputForm className="form-group col-md-4">
              <StyledInputLabel htmlFor="year">Year</StyledInputLabel>
              <StyledInputInput
                type="Number"
                placeholder="Year"
                name="year"
                className="year-input"
                id="year"
                onChange={(event) => setCertYear(event.target.value)}
              />
            </StyledInputForm>
          </div>

          <div className="form-row">
            <StyledInputForm className="form-group col-md-8">
              <StyledInputInput
                style={{ width: "98%" }}
                type="text"
                name="certificate"
                placeholder="e.g Figma Ambassador"
                className="input-cert first"
                id="cert"
                onChange={(event) => setCertName(event.target.value)}
              />
            </StyledInputForm>
            <StyledInputForm className="form-group col-md-4">
              <StyledInputInput
                type="Number"
                placeholder="Year"
                name="year"
                className="year-input"
                id="year"
                onChange={(event) => setCertYear(event.target.value)}
              />
            </StyledInputForm>
          </div>
        </form>
        <StyledAddItemWrap>
          <StyledAddItemText href="#">
            <span className="plus">+</span>&nbsp; Add Another
          </StyledAddItemText>
        </StyledAddItemWrap>

        <Buttons>
          <StyledPrev href="#" onClick={submitHandler}>
            <Link to="/new-resume/languages">Previous</Link>
          </StyledPrev>

          <StyledNext href="#" onClick={submitHandler}>
            <Link to="/new-resume/achivements" className="text-white">
              Next Section
            </Link>
          </StyledNext>
        </Buttons>
      </MainContent>
    </div>
  );
}

export default Certifications;
