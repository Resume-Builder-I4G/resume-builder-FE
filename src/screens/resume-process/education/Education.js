import React from "react";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledInputTextarea,
} from "../StyledComponents";
import "./Education.css";

function Education({ menu, activeMenu }) {
  return (
    <div>
      <div class="container-fluid content">
        <div class="row">
          <div class="col-12 main-content">
            <form>
              <div class="form-row">
                <StyledInputForm class="form-group col-xs-6">
                  <StyledInputLabel for="inputInstitutionName">
                    Institution Name
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    class="form-control"
                    id="inputInstitutionName"
                    placeholder="e.g Lautech"
                  />
                </StyledInputForm>
                <StyledInputForm class="form-group col-xs-6">
                  <StyledInputLabel for="inputFieldName">
                    Field of Study
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    class="form-control"
                    id="inputFieldName"
                  />
                </StyledInputForm>
              </div>

              <div class="form-row">
                <StyledInputForm class="form-group col-xs-6">
                  <StyledInputLabel for="inputCountry">
                    Country
                  </StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    class="form-control"
                    id="inputCountry"
                    placeholder="e.g Nigeria"
                  />
                </StyledInputForm>

                <StyledInputForm class="form-group col-xs-6">
                  <StyledInputLabel for="inputCity">City</StyledInputLabel>
                  <StyledInputInput
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="e.g Ogbomoso"
                  />
                </StyledInputForm>
              </div>

              <StyledInputForm class="form-group check-input">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkPresent"
                />
                <StyledInputLabel class="form-check-label" for="checkPresent">
                  Currently study here
                </StyledInputLabel>
              </StyledInputForm>

              <div class="form-row">
                <StyledInputForm class="form-group col-xs-3">
                  <StyledInputLabel for="inputStartMonth">
                    Time Period
                  </StyledInputLabel>
                  <select id="inputStartMonth" class="form-control">
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
                <StyledInputForm class="form-group col-xs-3">
                  <StyledInputLabel for="inputStartYear">.</StyledInputLabel>
                  <select id="inputStartYear" class="form-control">
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

                <StyledInputForm class="form-group col-xs-3">
                  <StyledInputLabel for="inputStartMonth">.</StyledInputLabel>
                  <select id="inputStartMonth" class="form-control">
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
                <StyledInputForm class="form-group col-xs-3">
                  <StyledInputLabel for="inputStartYear">.</StyledInputLabel>
                  <select id="inputStartYear" class="form-control">
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

              <StyledInputForm class="form-group">
                <StyledInputLabel for="inputOtherInfo">
                  Other Information
                </StyledInputLabel>
                <StyledInputTextarea
                  class="form-control"
                  id="inputOtherInfo"
                  rows="8"
                ></StyledInputTextarea>
              </StyledInputForm>
            </form>

            <div class="add-item">
              <a class="addItem" href="#">
                <span class="plus">+</span>&nbsp; Add Another
              </a>
            </div>

            <div class="buttons">
              <a class="previous" href="#">
                Back
              </a>
              <a class="next" href="#">
                Next Section
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
