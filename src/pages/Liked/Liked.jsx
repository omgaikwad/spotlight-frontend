import React from "react";
import "./Liked.css";
import "../Explore/Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useFilterContext } from "../../context/filter-context";

const Liked = () => {
  const { videoListState, videoListDispatch } = useFilterContext();

  const likedVideoList = [...videoListState.likedVideo].reverse();
  return (
    <div className="Liked video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <h2 className="page-heading liked-videos-heading">Liked Videos</h2>
        <div className="video-container">
          {likedVideoList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Liked;
