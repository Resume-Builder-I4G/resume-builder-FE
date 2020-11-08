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
  Buttons,
} from "../StyledComponents";
import "./Experience.css";
import { arrayOfYears, arrayOfMonths } from "../../../components/DateObject";
import { Link } from "react-router-dom";

function Experience() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescripttion] = useState("");

  const [startMonth, setStartMonth] = useState("Month");
  const [startYear, setStartYear] = useState("Year");

  const [endMonth, setEndMonth] = useState("Month");
  const [endYear, setEndYear] = useState("Year");

  const submitHandler = (event) => {
    event.preventDefault();
    const experienceObj = {
      company: company,
      title: title,
      city: city,
      country: country,
      description: description,
      startYear: startYear,
      endYear: endYear,
    };

    const experienceItems = [];
    experienceItems.push(experienceObj);
    localStorage.setItem("Experience", JSON.stringify(experienceItems));
  };

  return (
    <div className="housing">
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form onSubmit={submitHandler}>
              <div className="form-row">
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputJobTitle">
                    Job Title
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputJobTitle"
                    placeholder="e.g Graphics Designer"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel htmlFor="inputCompanyName">
                    Company Name
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCompanyName"
                    placeholder="e.g Ingressive 4 Good"
                    onChange={(event) => setCompany(event.target.value)}
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
                  Currently working here
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
                  Description
                </StyledInputLabel>
                <StyledInputTextarea
                  className="form-control"
                  id="inputDescription"
                  rows="8"
                  onChange={(event) => setDescripttion(event.target.value)}
                ></StyledInputTextarea>
              </StyledInputForm>
            </form>

            <StyledAddItemWrap>
              <StyledAddItemText href="#">
                <span className="plus">+</span>&nbsp; Add Another
              </StyledAddItemText>
            </StyledAddItemWrap>

            <Buttons>
              <StyledPrev type="submit" onClick={submitHandler} href="#">
                <Link to="/new-resume/education">Back</Link>
              </StyledPrev>
              <StyledNext type="submit" onClick={submitHandler} href="#">
                <Link to="/new-resume/languages" className="text-white">
                  Next Section
                </Link>
              </StyledNext>
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
