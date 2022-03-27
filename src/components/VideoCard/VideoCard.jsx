import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="VideoCard video-card">
      <Link to="/video">
        <img src={video.thumbnail} alt="" />
      </Link>
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
