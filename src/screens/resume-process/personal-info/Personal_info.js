import React from "react";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
} from "../StyledComponents";
import "./Personal_info.css";

function Personal_info({ menu, activeMenu }) {
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
                  <StyledInputLabel for="inputFirstName">
                    First Name
                  </StyledInputLabel>
                  <StyledInputInput
                    style={{ width: "100%", marginRight: "50px" }}
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="e.g John"
                  />
                </StyledInputForm>
                <StyledInputForm
                  style={{ width: "48%" }}
                  className="form-group col-xs-6"
                >
                  <StyledInputLabel for="inputLastName">
                    Last Name
                  </StyledInputLabel>
                  <StyledInputInput
                    style={{ width: "100%" }}
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="e.g Doe"
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

              <StyledInputForm className="form-group">
                <StyledInputLabel for="inputLocation">
                  Location
                </StyledInputLabel>
                <StyledInputInput
                  type="text"
                  className="form-control"
                  id="inputLocation"
                  placeholder="e.g Lagos Nigeria"
                />
              </StyledInputForm>

              <StyledInputForm className="form-group">
                <StyledInputLabel for="inputProfSummary">
                  Summary
                </StyledInputLabel>
                <StyledInputTextarea
                  className="form-control"
                  id="inputProfSummary"
                  rows="8"
                ></StyledInputTextarea>
              </StyledInputForm>
            </form>

            <div className="button">
              <StyledNext href="#">Next Section</StyledNext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_info;
