import React from "react";
import "./PlaylistCard.css";
import { useNavigate } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();

  const playlistCardClickHandler = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <div className="PlaylistCard">
      <img
        onClick={() => playlistCardClickHandler(playlist.playlistId)}
        className="playlist-card-image"
        src="/assets/images/113-workstation.png"
        alt=""
      />
      <p className="playlist-card-name"> {playlist.playlistName} </p>
    </div>
  );
};

export default PlaylistCard;
