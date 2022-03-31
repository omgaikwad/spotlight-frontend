import React from "react";
import "./HorizontalVideoCard.css";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const HorizontalVideoCard = ({ video }) => {
  const navigate = useNavigate();

  const { videoListDispatch } = useFilterContext();

  const videoCardClickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div
      className="HorizontalVideoCard"
      onClick={() => {
        videoCardClickHandler(video._id);
        videoListDispatch({ type: "HISTORY", payload: video });
      }}
    >
      <img src={video.thumbnail} alt="" className="horizontal-video-img" />

      <div className="horizontal-video-card-content">
        <div className="horizontal-video-card-description">
          <p className="horizontal-video-title">{video.title}</p>
        </div>
        <div className="horizontal-video-card-channel">
          <p className="horizontal-channel-name">
            {video.channel} <i className="fa-solid fa-circle-check"></i>
          </p>
        </div>
        <p className="horizontal-video-date">{video.date}</p>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
