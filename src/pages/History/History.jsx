import React from "react";
import "./History.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";

const History = () => {
  return (
    <div className="History video-listing-body">
      <Navbar />
      <Sidebar />

      <div class="video-content-container">
        <h2 class="page-heading">History</h2>
        <div class="video-container">
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default History;
