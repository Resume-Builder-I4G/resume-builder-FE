import React from "react";
import { Link } from "react-router-dom";
import Daniel from "../../assets/images/user_dashboard/Daniel.png";

function Dashboard_Nav() {
  return (
    <nav className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top">
      <div className="container">
        <Link to="/">
          <a className="navbar-brand text-light logo">
            Resume <span className="sub-logo text-light">Builder</span>
          </a>
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
            <li class="nav-item dropdown">
              <a
                class="nav-link text-light dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={Daniel} alt="" />
                Awojide Daniel
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                kgjh
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Dashboard_Nav;
