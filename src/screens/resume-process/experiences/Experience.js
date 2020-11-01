import React from "react";
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
import "./Experience.css";

function Experience() {
  return (
    <div className="housing">
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div className="form-row">
                <StyledInputForm className="form-group col-md-6">
                  <label htmlFor="inputJobTitle">Job Title</label>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputJobTitle"
                    placeholder="e.g Graphics Designer"
                  />
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-6">
                  <label for="inputCompanyName">Company Name</label>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCompanyName"
                    placeholder="e.g Ingressive 4 Good"
                  />
                </StyledInputForm>
              </div>

              <div className="form-row">
                <StyledInputForm className="form-group col-md-6">
                  <StyledInputLabel for="inputCountry">
                    Country
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCountry"
                    placeholder="e.g Nigeria"
                  />
                </StyledInputForm>

                <StyledInputForm className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <StyledInputInput
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="e.g Ogbomoso"
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
                  for="checkPresent"
                >
                  Currently working here
                </StyledInputLabel>
              </StyledInputForm>

              <div className="form-row mt-4">
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel for="inputStartMonth">
                    Time Period
                  </StyledInputLabel>
                  <select id="inputStartMonth" className="form-control">
                    <option selected>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel for="inputStartYear">.</StyledInputLabel>
                  <select id="inputStartYear" className="form-control">
                    <option selected>Year</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                  </select>
                </StyledInputForm>

                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel for="inputStartMonth">.</StyledInputLabel>
                  <select id="inputStartMonth" className="form-control">
                    <option selected>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </StyledInputForm>
                <StyledInputForm className="form-group col-md-3">
                  <StyledInputLabel for="inputStartYear">.</StyledInputLabel>
                  <select id="inputStartYear" className="form-control">
                    <option selected>Year</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                  </select>
                </StyledInputForm>
              </div>

              <StyledInputForm className="form-group">
                <StyledInputLabel for="inputDescription">
                  Description
                </StyledInputLabel>
                <StyledInputTextarea
                  className="form-control"
                  id="inputDescription"
                  rows="8"
                ></StyledInputTextarea>
              </StyledInputForm>
            </form>

            <StyledAddItemWrap>
              <StyledAddItemText href="#">
                <span className="plus">+</span>&nbsp; Add Another
              </StyledAddItemText>
            </StyledAddItemWrap>

            <div className="buttons">
              <StyledPrev href="#">Back</StyledPrev>
              <StyledNext href="#">Next Section</StyledNext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
