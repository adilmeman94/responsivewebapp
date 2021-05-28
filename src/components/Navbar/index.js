import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          LOTTOSOCIAL
        </Link>
        <button
          className="navbar-toggler order-first"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#account"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-user"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                STORE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                CHARITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                HELP
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="account">
          <ul className="navbar-nav text-center">
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Signin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
