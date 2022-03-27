import React from "react";
import "./HorizontalVideoCard.css";

const HorizontalVideoCard = () => {
  return (
    <div className="HorizontalVideoCard">
      <a href="">
        <img
          src="../../assets/video-thumbnails/akash-singh-apu.jpg"
          alt=""
          className="horizontal-video-img"
        />
      </a>
      <div class="horizontal-video-card-content">
        <div class="horizontal-video-card-description">
          <p class="horizontal-video-title">Akaash Singh's Defense of Apu</p>
        </div>
        <div class="horizontal-video-card-channel">
          <p class="horizontal-channel-name">
            PowerfulJRE <i class="fa-solid fa-circle-check"></i>
          </p>
        </div>
        <p className="horizontal-video-date">Feb 9, 2022</p>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
