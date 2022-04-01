import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="left-navbar">
        <Link to="/">
          <div className="brand-logo">
            <p className="brand-name">Spotlight</p>
            <img
              src="/assets/logo/spotlight-logo-small.png"
              alt="spotlight-logo"
              className="spotlight-logo"
            />
          </div>
        </Link>
      </div>
      <div className="center-navbar">
        <input
          type="text"
          name=""
          id=""
          className="searchbar"
          placeholder="Search"
        />
        <div className="search-icon-container">
          <i className="fa-solid fa-magnifying-glass fa-md"></i>
        </div>
      </div>
      <div className="right-navbar">
        <Link to="/login" className="btn btn-primary btn-login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
