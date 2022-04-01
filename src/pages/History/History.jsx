import React from "react";
import "./History.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useFilterContext } from "../../context/filter-context";

const History = () => {
  const { videoListState, videoListDispatch } = useFilterContext();

  const videoHistoryList = [...videoListState.history].reverse();

  return (
    <div className="History video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <div className="history-title-container">
          <h2 className="page-heading history-page-heading">History</h2>
          <button
            onClick={() => videoListDispatch({ type: "CLEAR_HISTORY" })}
            className="btn btn-primary clearHistoryBtn"
          >
            Clear History
          </button>
        </div>
        <div className="video-container">
          {videoHistoryList.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
