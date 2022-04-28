import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("USER_DATA");

    setAuth({
      isLoggedIn: localStorage.getItem("USER_TOKEN") ? true : false,
      token: localStorage.getItem("USER_TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_DATA")),
    });

    setShowProfileDropdown(false);
    navigate("/login");
  };

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
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
        {auth.isLoggedIn ? (
          <div className="navbar-profile-container">
            <div
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="navbar-profile-title-container"
            >
              <p className="navbar-profile-title">Hi, {auth.user.firstName}</p>
              <p className="navbar-profile-title-account">
                Account <i className="fa-solid fa-caret-down"></i>
              </p>
            </div>
            <div
              className={`navbar-profile-dropdown-container ${
                showProfileDropdown === false ? "display-none" : null
              }`}
            >
              <button className="btn btn-outline-primary navbar-dropdown-my-profile">
                <Link to="/">Profile</Link>
              </button>
              <button
                onClick={logoutHandler}
                className="btn btn-primary btn-logout"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button className="btn btn-primary btn-login">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
