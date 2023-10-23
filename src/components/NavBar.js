import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="fw-bold navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={
      {
        fontSize: "40px",
      }
    }>
      PBG_News
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={
        {
          fontSize: "30px",
        }
      }>
        <li className="nav-item">
          <Link to="/" className="nav-link active text-center">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active text-center">
          About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-center" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
  }
}

export default NavBar;
