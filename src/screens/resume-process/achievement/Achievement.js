import React, { useState } from "react";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import {
  Buttons,
  MainContent,
  StyledAddItemText,
  StyledAddItemWrap,
  StyledInputForm,
  StyledInputInput,
  StyledNext,
  StyledPrev,
} from "../StyledComponents";
import "./Achievements.css";
import { Link } from "react-router-dom";

function Achievement() {
  // const initAchievement = [];

  // const [achievement, setAchievement] = useState(initAchievement);

  const [achievement, setAchievement] = useState([{ name: "" }]);

  //Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...achievement];
    list[index][name] = value;
    setAchievement(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...achievement];
    list.splice(index, 1);
    setAchievement(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setAchievement([...achievement, { name: "" }]);
  };

  return (
    <div id="achievement" className="container-fluid content">
      <div className="previewndownload-wrap">
        <PreviewDownload />
      </div>
      <MainContent className="main-content-body">
        <p className="head-achievement">Achievement</p>
        <form>
          {achievement.map((x, i) => {
            return (
              <React.Fragment key={achievement[x.name]}>
                <StyledInputForm className="form-group">
                  <label htmlFor="inputAchievement">Achievements</label>
                  <StyledInputInput
                    style={{ height: "50px" }}
                    type="text"
                    className="form-control"
                    id="achieve"
                    placeholder="Finalist at Ingressive 4 Good 2020"
                    // defaultValue={initAchievement}
                    name="name"
                    value={x.name}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </StyledInputForm>
                <StyledAddItemWrap className="addnremove-btn-container">
                  {achievement.length - 1 === i && (
                    <StyledAddItemText href="#" onClick={handleAddClick}>
                      <span className="plus"> +</span>&nbsp; Add Another
                    </StyledAddItemText>
                  )}
                  {achievement.length !== 1 && (
                    <StyledAddItemText
                      href="#"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <span className="plus">-</span>&nbsp; Remove
                    </StyledAddItemText>
                  )}
                </StyledAddItemWrap>
              </React.Fragment>
            );
          })}
        </form>

        <Buttons className="nextnprev-btn-container">
          <StyledPrev href="#">
            <Link to="/new-resume/certifications">Back</Link>
          </StyledPrev>

          <StyledNext href="#">
            <Link to="/new-resume/skills" className="text-white">
              Next Section
            </Link>
          </StyledNext>
        </Buttons>
      </MainContent>
    </div>
  );
}

export default Achievement;
