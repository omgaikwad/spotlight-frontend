import React from "react";
import "./Video.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HorizontalVideoCard from "../../components/HorizontalVideoCard/HorizontalVideoCard";

const Video = () => {
  return (
    <div className="Video video-listing-body">
      <Navbar />
      <Sidebar />
      <div className="video-page-container">
        <div className="video-details-container">
          <div className="iframe-container">
            <iframe
              width="796.5"
              height="448.2"
              src="https://www.youtube-nocookie.com/embed/I5pVVmcSXVU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="video-details-title">Akaash Singh's Defense of Apu</h2>
          <div className="video-details-action-container">
            <div className="video-details-btn-container">
              <div className="video-details-date-container">
                <p>Feb 9, 2022</p>
              </div>

              <button className="video-details-cta-btn">
                <i className="fa-solid fa-heart fa-md"></i>
                <p>Like</p>
              </button>
              <button className="video-details-cta-btn">
                <i className="fa-solid fa-clock fa-md"></i>
                <p>Add to Watch Later</p>
              </button>
              <button className="video-details-cta-btn">
                <i className="fa-solid fa-folder-plus fa-md"></i>
                <p>Add to Playlist</p>
              </button>
            </div>
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
        <div className="suggested-video-container">
          <h2 className="suggested-heading">Suggested Videos</h2>
          <HorizontalVideoCard />
          <HorizontalVideoCard />
          <HorizontalVideoCard />
          <HorizontalVideoCard />
        </div>
      </div>
    </div>
  );
};

export default Video;
