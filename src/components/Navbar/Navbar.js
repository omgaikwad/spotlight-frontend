import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div class="left-navbar">
        <div class="brand-logo">
          <a href="./index.html">
            <p class="brand-name">Spotlight</p>
          </a>
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
        <button class="btn btn-primary btn-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
