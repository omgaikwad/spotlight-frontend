import React from "react";
import "./WatchLater.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useFilterContext } from "../../context/filter-context";

const WatchLater = () => {
  const { videoListState, videoListDisptach } = useFilterContext();

  const watchedVideoList = videoListState.watchLater;

  return (
    <div className="WatchLater video-listing-body">
      <Navbar />
      <Sidebar />

      <div class="video-content-container">
        <h2 class="page-heading">Watch Later</h2>
        <div class="video-container">
          {watchedVideoList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
