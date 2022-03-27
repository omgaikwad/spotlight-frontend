import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div class="left-navbar">
        <div class="brand-logo">
          <Link to="/">
            <p class="brand-name">Spotlight</p>
          </Link>
        </div>
      </div>
      <div class="center-navbar">
        <input
          type="text"
          name=""
          id=""
          class="searchbar"
          placeholder="Search"
        />
        <div class="search-icon-container">
          <i class="fa-solid fa-magnifying-glass fa-md"></i>
        </div>
      </div>
      <div class="right-navbar">
        <Link to="/login" class="btn btn-primary btn-login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
