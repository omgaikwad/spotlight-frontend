import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <div className="VideoCard video-card">
      <Link to="/video">
        <img src="../../assets/video-thumbnails/akash-singh-apu.jpg" alt="" />
      </Link>
      <div class="video-card-content">
        <div class="video-card-description">
          <p class="video-title">Akaash Singh's Defense of Apu</p>
        </div>
        <div class="video-card-channel">
          <img
            class="avatar avatar-sm"
            src="../../assets/channel-avatar/joe-rogan.jpg"
            alt="avatar"
          />
          <p class="channel-name">
            PowerfulJRE <i class="fa-solid fa-circle-check"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
