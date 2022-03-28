import React from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const { videoListDispatch } = useFilterContext();

  const videoClickHandler = (videoId) => {
    navigate(`/${videoId}`);
  };

  return (
    <div className="VideoCard video-card">
      <img
        src={video.thumbnail}
        alt=""
        className="video-card-thumbnail"
        onClick={() => {
          videoClickHandler(video._id);
          videoListDispatch({ type: "HISTORY", payload: video });
        }}
      />
      <div className="video-card-content">
        <div className="video-card-description">
          <p className="video-title">{video.title}</p>
        </div>
        <div className="video-card-channel">
          <img
            className="avatar avatar-sm"
            src={video.channelAvatar}
            alt="avatar"
          />
          <p className="channel-name">
            {video.channel} <i className="fa-solid fa-circle-check"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
