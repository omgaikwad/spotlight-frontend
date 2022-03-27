import React from "react";
import "./Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideoContext } from "../../context/video-context";

const Explore = () => {
  const { videoList } = useVideoContext();
  console.log(videoList);

  const filteredVideoList = [...videoList];

  return (
    <div className="Explore video-listing-body">
      <Navbar />
      <Sidebar />
      <div class="video-content-container">
        <div class="category-chips-container">
          <button class="category-chip">
            <i class="fa-solid fa-code"></i>
            <p>Tech</p>
          </button>
          <button class="category-chip">
            <i class="fa-solid fa-clapperboard"></i>
            <p>Anime</p>
          </button>
          <button class="category-chip">
            <i class="fa-solid fa-gamepad"></i>
            <p>Gaming</p>
          </button>
          <button class="category-chip">
            <i class="fa-solid fa-music"></i>
            <p>Music</p>
          </button>
          <button class="category-chip">
            <i class="fa-solid fa-microphone"></i>
            <p>Podcast</p>
          </button>
          <button class="category-chip">
            <i class="fa-solid fa-camera"></i>
            <p>Vlog</p>
          </button>
        </div>

        <div class="video-container">
          {filteredVideoList.map((videoItem) => {
            return <VideoCard video={videoItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
