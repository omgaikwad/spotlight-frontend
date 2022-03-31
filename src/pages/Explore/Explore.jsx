import React from "react";
import "./Explore.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useVideoContext } from "../../context/video-context";
import { useFilterContext } from "../../context/filter-context";

const Explore = () => {
  const { videoList } = useVideoContext();
  const { videoListState, videoListDispatch } = useFilterContext();

  const filteredVideoList =
    videoListState.category === "all"
      ? [...videoList]
      : [...videoList].filter(
          (video) => video.category === videoListState.category
        );

  return (
    <div className="Explore video-listing-body">
      <Navbar />
      <Sidebar />
      <div className="video-content-container">
        <div className="category-chips-container">
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "all" })
            }
            className={`category-chip ${
              videoListState.category === "all" ? "active-category-chip" : null
            }`}
          >
            <i className="fa-solid fa-layer-group"></i>
            <p>All</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "tech" })
            }
            className={`category-chip ${
              videoListState.category === "tech" ? "active-category-chip" : null
            }`}
          >
            <i className="fa-solid fa-code"></i>
            <p>Tech</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "anime" })
            }
            className={`category-chip ${
              videoListState.category === "anime"
                ? "active-category-chip"
                : null
            }`}
          >
            <i className="fa-solid fa-clapperboard"></i>
            <p>Anime</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "gaming" })
            }
            className={`category-chip ${
              videoListState.category === "gaming"
                ? "active-category-chip"
                : null
            }`}
          >
            <i className="fa-solid fa-gamepad"></i>
            <p>Gaming</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "music" })
            }
            className={`category-chip ${
              videoListState.category === "music"
                ? "active-category-chip"
                : null
            }`}
          >
            <i className="fa-solid fa-music"></i>
            <p>Music</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "podcast" })
            }
            className={`category-chip ${
              videoListState.category === "podcast"
                ? "active-category-chip"
                : null
            }`}
          >
            <i className="fa-solid fa-microphone"></i>
            <p>Podcast</p>
          </button>
          <button
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "vlog" })
            }
            className={`category-chip ${
              videoListState.category === "vlog" ? "active-category-chip" : null
            }`}
          >
            <i className="fa-solid fa-camera"></i>
            <p>Vlog</p>
          </button>
        </div>

        <div className="video-container">
          {filteredVideoList.map((videoItem) => {
            return <VideoCard key={videoItem._id} video={videoItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
