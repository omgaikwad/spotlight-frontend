import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Playlist = () => {
  return (
    <div className="Playlist video-listing-body">
      <Navbar />
      <Sidebar />

      <div class="video-content-container">
        <h2 class="page-heading">Playlists</h2>
        <div class="video-container"></div>
      </div>
    </div>
  );
};

export default Playlist;
