import React, { useState, useEffect } from "react";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledNext,
  StyledPrev,
  StyledAddItemText,
  StyledAddItemWrap,
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
      <div className="col col-md-12 col-xs-6 main-content">
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
        <div className="col-md-12 done-btn">
          <div className="buttons">
            <Link to="/new-resume/languages">
              <StyledPrev href="#" onClick={submitHandler}>
                Previous
              </StyledPrev>
            </Link>
            <Link to="/new-resume/achivements">
              <StyledNext href="#" onClick={submitHandler}>
                Next Section
              </StyledNext>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
