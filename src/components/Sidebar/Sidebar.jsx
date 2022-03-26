import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar sidebar-container">
      <a href="../../index.html" class="sidebar-navigation">
        <i class="fa-solid fa-house fa-md"></i>
        <p>Home</p>
      </a>
      <a href="../video-listing/video-listing.html" class="sidebar-navigation">
        <i class="fa-solid fa-compass fa-md"></i>
        <p>Explore</p>
      </a>
      <a href="../playlist/playlist.html" class="sidebar-navigation">
        <i class="fa-solid fa-folder-plus fa-md"></i>
        <p>Playlist</p>
      </a>
      <a href="../liked/liked.html" class="sidebar-navigation">
        <i class="fa-solid fa-heart fa-md"></i>
        <p>Liked</p>
      </a>
      <a href="../watch-later/watch-later.html" class="sidebar-navigation">
        <i class="fa-solid fa-clock fa-md"></i>
        <p>Watch Later</p>
      </a>
      <a href="../history/history.html" class="sidebar-navigation">
        <i class="fa-solid fa-clock-rotate-left fa-md"></i>
        <p>History</p>
      </a>
    </div>
  );
};

export default Sidebar;
