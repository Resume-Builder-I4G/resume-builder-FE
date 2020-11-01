import React from "react";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./References.css";

function References({ menu, activeMenu }) {
  return (
    <div>
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div style={{ width: "100%" }} className="form-row">
                <StyledInputForm
                  style={{ width: "48%", marginRight: "4%" }}
                  className="form-group col-xs-6"
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
                  style={{ width: "48%" }}
                  className="form-group col-xs-6"
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

            <div className="button">
              <StyledPrev href="#"> Back </StyledPrev>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
