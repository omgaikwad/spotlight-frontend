import React from "react";
import "./VideoCard.css";
import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { useHistoryContext } from "../../context/history-context";
import { useWatchLaterContext } from "../../context/watch-later-context";
import { usePlaylistContext } from "../../context/playlist-context";

const VideoCard = ({ video, playlistId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("path", location.pathname);

  const { addVideoToHistory, removeVideoFromHistory } = useHistoryContext();
  const { removeVideoFromWatchLater } = useWatchLaterContext();
  const { deleteVideoFromPlaylist } = usePlaylistContext();

  const videoClickHandler = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="VideoCard video-card">
      <img
        src={video.thumbnail}
        alt=""
        className="video-card-thumbnail"
        onClick={() => {
          videoClickHandler(video._id);
          addVideoToHistory(video);
        }}
      />
      {location.pathname === "/history" ? (
        <i
          onClick={(e) => {
            e.stopPropagation();
            removeVideoFromHistory(video._id);
          }}
          className="fa-solid fa-trash delete-icon"
        ></i>
      ) : location.pathname === "/watch-later" ? (
        <i
          onClick={(e) => {
            e.stopPropagation();
            removeVideoFromWatchLater(video._id);
          }}
          className="fa-solid fa-trash delete-icon"
        ></i>
      ) : matchPath("/playlist/:playlistId", location.pathname) ? (
        <i
          onClick={(e) => {
            e.stopPropagation();
            deleteVideoFromPlaylist(video._id, playlistId);
          }}
          className="fa-solid fa-trash delete-icon"
        ></i>
      ) : null}
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
