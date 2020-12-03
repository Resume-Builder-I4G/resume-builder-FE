import React from "react";
import { getUser } from "../../utils/Common";
import { Link } from "react-router-dom";
import "./Dashboard_Nav.css";

function Dashboard_Nav(props) {
  const hero = "https://via.placeholder.com/45";
  const user = getUser();

  return (
    <nav
      className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top"
      id="dash-nav"
    >
      <div className="container">
        <Link className="navbar-brand text-white logo" to="/dashboard">
          ResumeBuilder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <img className="img-fluid" src="./assets/images/navicon.png" alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link text-light" href=""></a>
              </Link>
            </li> */}
            <li class="nav-item dropdown btn-group">
              <button
                variant="link"
                type="link"
                class="nav-link text-light dropdown-toggle profile-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={user.image ? user.image : hero} alt="" />
                {user.name}
              </button>
              <div class="dropdown-menu settingsnlogout-wrap dropdown-menu-right bg-white text-center border-1 m-1 py-3">
                <div className="d-flex align-items-center imagenemail-wrap">
                  <div className="nav-image-drop mr-3">
                    <img src={user.image ? user.image : hero} alt="" />
                  </div>
                  <div className="namenemail-nav">
                    <p className="name text-left">{user.name}</p>
                    <p className="email mb-0 text-left">{user.email}</p>
                  </div>
                </div>

                <div className="btn-wrap w-100 d-flex justify-content-between">
                  <button className="settings-btn">Settings</button>
                  <button
                    className="log-out-btn ml-4"
                    onClick={props.handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Dashboard_Nav;
