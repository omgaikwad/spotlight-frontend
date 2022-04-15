import React from "react";
import "./History.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useFilterContext } from "../../context/filter-context";
import { useHistoryContext } from "../../context/history-context";

const History = () => {
  const { history, clearHistory } = useHistoryContext();

  const videoHistoryList = [...history].reverse();

  return (
    <div className="History video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <div className="history-title-container">
          <h2 className="page-heading history-page-heading">History</h2>
          <button
            onClick={() => clearHistory()}
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
