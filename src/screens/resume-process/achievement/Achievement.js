import React from 'react'
import "./Achievement.css"

function Achievement() {
    return (
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div className="form-group input-form">
                <label for="inputAchievement">Achievements</label>
                <input
                  type="text"
                  className="form-control"
                  id="achieve"
                  placeholder="Finalist at Ingressive 4 Good 2020"
                />
              </div>

              <div className="form-group input-form">
                <input
                  type="text"
                  className="form-control"
                  id="achieve"
                  placeholder="Finalist at Ingressive 4 Good 2020"
                />
              </div>

              <div className="form-group input-form">
                <input
                  type="text"
                  className="form-control"
                  id="achieve"
                  placeholder="Finalist at Ingressive 4 Good 2020"
                />
              </div>
            </form>

            <div className="add-item">
              <a className="addItem" href="#">
                <span className="plus">+</span>&nbsp; Add Another
              </a>
            </div>

            <div className="buttons">
              <a className="previous" href="#">
                Back
              </a>
              <a className="next" href="#">
                Next Section
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Achievement;
