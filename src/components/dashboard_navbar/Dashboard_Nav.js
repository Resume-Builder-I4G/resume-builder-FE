import React from "react";
import { Link } from "react-router-dom";
import Daniel from "../../assets/images/user_dashboard/Daniel.png";
import "./Dashboard_Nav.css";

function Dashboard_Nav(props) {
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
                <img src={Daniel} alt="" />
                Awojide Daniel
              </button>
              <div class="dropdown-menu dropdown-menu-right bg-white text-center border-1 m-1 px-4 py-3">
                <p className="name">Awojide Daniel</p>
                <p className="email">awojidedaniel@gmail.com</p>
                {/* <button class="dropdown-item" type="button">
                    Action
                  </button>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button> */}
                <div className="btn-wrap w-100 d-flex justify-content-between">
                  <button className="settings-btn px-3 py-2 mr-4">
                    Settings
                  </button>
                  <button
                    className="log-out-btn px-1 py-2"
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
