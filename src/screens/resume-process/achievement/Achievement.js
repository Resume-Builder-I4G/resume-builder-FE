import React from "react";
import {
  StyledAddItemText,
  StyledAddItemWrap,
  StyledInputForm,
  StyledInputInput,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Achievements.css";

function Achievement() {
  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form>
            <StyledInputForm className="form-group">
              <label for="inputAchievement">Achievements</label>
              <StyledInputInput
                style={{ height: "50px" }}
                type="text"
                className="form-control"
                id="achieve"
                placeholder="Finalist at Ingressive 4 Good 2020"
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputInput
                style={{ height: "50px" }}
                type="text"
                className="form-control"
                id="achieve"
                placeholder="Finalist at Ingressive 4 Good 2020"
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputInput
                style={{ height: "50px" }}
                type="text"
                className="form-control"
                id="achieve"
                placeholder="Finalist at Ingressive 4 Good 2020"
              />
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
  );
}

export default Achievement;
