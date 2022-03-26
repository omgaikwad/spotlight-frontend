import React from "react";

const VideoCard = () => {
  return (
    <div className="VideoCard video-card">
      <a href="">
        <img src="../../assets/video-thumbnails/akash-singh-apu.jpg" alt="" />
      </a>
      <div class="video-card-content">
        <div class="video-card-description">
          <p class="video-title">Akaash Singh's Defense of Apu</p>
          <div class="video-card-options">
            <i class="fa-solid fa-lg fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div class="video-card-channel">
          <img
            class="avatar avatar-sm"
            src="../../assets/channel-avatar/joe-rogan.jpg"
            alt="avatar"
          />
          <p class="channel-name">PowerfulJRE</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
