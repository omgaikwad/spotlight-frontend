import React from "react";
import "./Liked.css";
import "../Explore/Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";

const Liked = () => {
  return (
    <div className="Liked video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <h2 className="page-heading">Liked Videos</h2>
        <div className="video-container">{/* <VideoCard /> */}</div>
      </div>
    </div>
  );
};

export default Liked;
