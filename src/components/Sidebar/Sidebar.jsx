import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  console.log(window.location.pathname);
  return (
    <div className="Sidebar sidebar-container">
      <Link to="/" className="sidebar-navigation">
        <i className="fa-solid fa-house fa-md"></i>
        <p>Home</p>
      </Link>
      <Link
        to="/explore"
        className={
          window.location.pathname === "/explore"
            ? "active-page"
            : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-compass fa-md"></i>
        <p>Explore</p>
      </Link>
      <Link
        to="/playlist"
        className={
          window.location.pathname === "/playlist"
            ? "active-page"
            : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-folder-plus fa-md"></i>
        <p>Playlist</p>
      </Link>
      <Link
        to="/liked"
        className={
          window.location.pathname === "/liked"
            ? "active-page"
            : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-heart fa-md"></i>
        <p>Liked</p>
      </Link>
      <Link
        to="/watch-later"
        className={
          window.location.pathname === "/watch-later"
            ? "active-page"
            : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-clock fa-md"></i>
        <p>Watch Later</p>
      </Link>
      <Link
        to="/history"
        className={
          window.location.pathname === "/history"
            ? "active-page"
            : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-clock-rotate-left fa-md"></i>
        <p>History</p>
      </Link>
    </div>
  );
};

export default Sidebar;
