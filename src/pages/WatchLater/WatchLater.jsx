import React from "react";
import "./WatchLater.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";

const WatchLater = () => {
  return (
    <div className="WatchLater video-listing-body">
      <Navbar />
      <Sidebar />

      <div class="video-content-container">
        <h2 class="page-heading">Watch Later</h2>
        <div class="video-container">{/* <VideoCard /> */}</div>
      </div>
    </div>
  );
};

export default WatchLater;
