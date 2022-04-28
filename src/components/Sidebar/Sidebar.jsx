import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Sidebar = () => {
  const { auth } = useAuthContext();

  return (
    <div className="Sidebar sidebar-container">
      <NavLink to="/" className="sidebar-navigation">
        <i className="fa-solid fa-house fa-md"></i>
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? "active-page" : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-compass fa-md"></i>
        <p>Explore</p>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive ? "active-page" : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-folder-plus fa-md"></i>
        <p>Playlist</p>
      </NavLink>
      <NavLink
        to="/liked"
        className={({ isActive }) =>
          isActive ? "active-page" : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-heart fa-md"></i>
        <p>Liked</p>
      </NavLink>
      <NavLink
        to="/watch-later"
        className={({ isActive }) =>
          isActive ? "active-page" : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-clock fa-md"></i>
        <p>Watch Later</p>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? "active-page" : "sidebar-navigation"
        }
      >
        <i className="fa-solid fa-clock-rotate-left fa-md"></i>
        <p>History</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
