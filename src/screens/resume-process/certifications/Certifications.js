import React from "react";
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

function Certifications() {
  return (
    <div className="container-fluid content">
      <div className="col col-md-12 col-xs-6 main-content">
        <form>
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
              />
            </StyledInputForm>
            <StyledInputForm className="form-group col-md-4">
              <StyledInputInput
                type="Number"
                placeholder="Year"
                name="year"
                className="year-input"
                id="year"
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
              />
            </StyledInputForm>
            <StyledInputForm className="form-group col-md-4">
              <StyledInputInput
                type="Number"
                placeholder="Year"
                name="year"
                className="year-input"
                id="year"
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
            <StyledPrev href="#">Previous</StyledPrev>
            <StyledNext href="#">Next Section</StyledNext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
