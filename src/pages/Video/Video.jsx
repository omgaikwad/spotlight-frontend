import React from "react";
import "./Video.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HorizontalVideoCard from "../../components/HorizontalVideoCard/HorizontalVideoCard";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";
import { useFilterContext } from "../../context/filter-context";

const Video = () => {
  const { videoId } = useParams();
  const { videoList } = useVideoContext();
  const { videoListState, videoListDispatch } = useFilterContext();

  const video = videoList.find((item) => item._id === videoId);

  const suggestedVideoList = [...videoList]
    .filter((item) => item._id !== videoId)
    .slice(0, 4);

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
              src={`https://www.youtube-nocookie.com/embed/${video._id}/?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="video-details-title">{video.title}</h2>
          <div className="video-details-action-container">
            <div className="video-details-btn-container">
              <div className="video-details-date-container">
                <p> {video.date} </p>
              </div>

              <button
                onClick={() =>
                  videoListDispatch({ type: "LIKE", payload: video })
                }
                className={`video-details-cta-btn ${
                  videoListState.likedVideo.includes(video)
                    ? "active-cta-btn"
                    : null
                }`}
              >
                <i className="fa-solid fa-heart fa-md"></i>
                <p>
                  {videoListState.likedVideo.includes(video) ? "Liked" : "Like"}
                </p>
              </button>
              <button
                onClick={() =>
                  videoListDispatch({ type: "WATCH_LATER", payload: video })
                }
                className={`video-details-cta-btn ${
                  videoListState.watchLater.includes(video)
                    ? "active-cta-btn"
                    : null
                }`}
              >
                <i className="fa-solid fa-clock fa-md"></i>
                <p>
                  {videoListState.watchLater.includes(video)
                    ? "Saved"
                    : "Save to Watch Later"}
                </p>
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
              src={video.channelAvatar}
              alt="avatar"
            />
            <p class="channel-name">
              {video.channel} <i class="fa-solid fa-circle-check"></i>
            </p>
          </div>
        </div>
        <div className="suggested-video-container">
          <h2 className="suggested-heading">Suggested Videos</h2>
          {suggestedVideoList.map((video) => {
            return <HorizontalVideoCard video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
