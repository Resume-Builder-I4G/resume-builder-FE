import React, { useState, useEffect } from "react";
import {
  StyledAddItemText,
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
  StyledAddItemWrap,
} from "../StyledComponents";
import "./Education.css";
import { arrayOfYears, arrayOfMonths } from "../../../components/DateObject";

function Education() {
  const [institution, setInstitution] = useState("");
  const [study, setStudy] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [information, setInformation] = useState("");

  const [startMonth, setStartMonth] = useState("Month");
  const [startYear, setStartYear] = useState("Year");

  const [endMonth, setEndMonth] = useState("Month");
  const [endYear, setEndYear] = useState("Year");

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="housing">
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form onSubmit={submitHandler}>
              <div className="form-row">
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputInstitutionName">
                    Institution Name
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputInstitutionName"
                    placeholder="e.g lautech"
                    onChange={(event) => setInstitution(event.target.value)}
                  />
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputCompanyName">
                    Field of Study
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCompanyName"
                    placeholder=""
                    onChange={(event) => setStudy(event.target.value)}
                  />
                </StyledInputForm>
              </div>

              <div className="form-row">
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputCountry">
                    Country
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCountry"
                    placeholder="e.g Nigeria"
                    onChange={(event) => setCountry(event.target.value)}
                  />
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputCity">City</StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="e.g Ogbomoso"
                    onChange={(event) => setCity(event.target.value)}
                  />
                </StyledInputForm>
              </div>

              <StyledInputForm className="form-group check-input mr-4">
                <StyledInputInput
                  type="checkbox"
                  className="form-check-input"
                  id="checkPresent"
                />
                <StyledInputLabel
                  className="form-check-label"
                  htmlFor="checkPresent"
                >
                  Currently study here
                </StyledInputLabel>
              </StyledInputForm>

              <div className="form-row mt-4">
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel htmlFor="inputStartMonth">
                    Time Period
                  </StyledInputLabel>
                  <select
                    id="inputStartMonth"
                    className="form-control"
                    value={startMonth}
                    onChange={(event) => setStartMonth(event.target.value)}
                    onBlur={(event) => setStartMonth(event.target.value)}
                  >
                    <option>Month</option>
                    {arrayOfMonths.map((month) => {
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel htmlFor="inputStartYear">
                    .
                  </StyledInputLabel>
                  <select
                    id="inputStartYear"
                    className="form-control"
                    value={startYear}
                    onChange={(event) => setStartYear(event.target.value)}
                    onBlur={(event) => setStartYear(event.target.value)}
                  >
                    <option>Year</option>
                    {arrayOfYears().map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </StyledInputForm>

                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel htmlFor="inputStartMonth">
                    .
                  </StyledInputLabel>
                  <select
                    id="inputStartMonth"
                    className="form-control"
                    value={endMonth}
                    onChange={(event) => setEndMonth(event.target.value)}
                    onBlur={(event) => setEndMonth(event.target.value)}
                  >
                    <option>Month</option>
                    {arrayOfMonths.map((month) => {
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel htmlFor="inputStartYear">
                    .
                  </StyledInputLabel>
                  <select
                    id="inputStartYear"
                    className="form-control"
                    value={endYear}
                    onChange={(event) => setEndYear(event.target.value)}
                    onBlur={(event) => setEndYear(event.target.value)}
                  >
                    <option>Year</option>
                    {arrayOfYears().map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </StyledInputForm>
              </div>

              <StyledInputForm className="form-group">
                <StyledInputLabel htmlFor="inputDescription">
                  Other Information
                </StyledInputLabel>
                <StyledInputTextarea
                  className="form-control"
                  id="inputDescription"
                  rows="8"
                  onChange={(event) => setInformation(event.target.value)}
                ></StyledInputTextarea>
              </StyledInputForm>
            </form>

            <StyledAddItemWrap>
              <StyledAddItemText href="#">
                <span className="plus">+</span>&nbsp; Add Another
              </StyledAddItemText>
            </StyledAddItemWrap>

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
    </div>
  );
}

export default Education;
