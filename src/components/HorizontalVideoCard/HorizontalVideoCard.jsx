import React from "react";
import "./HorizontalVideoCard.css";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const HorizontalVideoCard = ({ video }) => {
  const navigate = useNavigate();

  const { videoListDispatch } = useFilterContext();

  const videoCardClickHandler = (videoId) => {
    navigate(`/${videoId}`);
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

      <div class="horizontal-video-card-content">
        <div class="horizontal-video-card-description">
          <p class="horizontal-video-title">{video.title}</p>
        </div>
        <div class="horizontal-video-card-channel">
          <p class="horizontal-channel-name">
            {video.channel} <i class="fa-solid fa-circle-check"></i>
          </p>
        </div>
        <p className="horizontal-video-date">{video.date}</p>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
