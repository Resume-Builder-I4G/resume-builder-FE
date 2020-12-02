import React, { useState, useEffect } from "react";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import {
  Buttons,
  MainContent,
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./References.css";
import { Link } from "react-router-dom";

function References(props) {
  return (
    <>
      <div id="reference" className="container-fluid content">
        <div className="previewndownload-wrap">
          <PreviewDownload />
        </div>
        <MainContent className="main-content-body">
          <p className="head-reference">Reference</p>
          <form>
            <div style={{ width: "100%" }} className="form-row">
              <StyledInputForm
                style={{ width: "43%" }}
                className="form-group col-md-6 reference-name"
              >
                <StyledInputLabel for="inputReferenceName">
                  Reference Name
                </StyledInputLabel>
                <StyledInputInput
                  style={{ width: "100%", marginRight: "50px" }}
                  type="text"
                  className="form-control"
                  id="inputReferenceName"
                  placeholder="e.g John Doe"
                />
              </StyledInputForm>
              <StyledInputForm
                style={{ width: "43%" }}
                className="form-group col-md-6 reference-company"
              >
                <StyledInputLabel for="inputJobTitle|CompanyName">
                  Job Title | Company Name
                </StyledInputLabel>
                <StyledInputInput
                  style={{ width: "100%" }}
                  type="text"
                  className="form-control"
                  id="inputJobTitle|CompanyName"
                  placeholder="e.g Product Designer, Ingressive 4 Good"
                />
              </StyledInputForm>
            </div>

            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputEmail">
                Email Address
              </StyledInputLabel>
              <StyledInputInput
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="example@gmail.com"
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputLabel for="inputPhoneNumber">
                Phone Number
              </StyledInputLabel>
              <StyledInputInput
                type="tel"
                className="form-control"
                id="inputPhoneNumber"
                placeholder="080 000 0000"
              />
            </StyledInputForm>
          </form>

          <Buttons className="nextandprev-btn-container">
            <StyledPrev>
              <Link to="/new-resume/skills"> Back </Link>
            </StyledPrev>

            <StyledNext>
              <Link to="/template-a" className="text-white">
                Download
              </Link>
            </StyledNext>
          </Buttons>
        </MainContent>
      </div>
    </>
  );
}

export default References;
