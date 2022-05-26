import React from "react";
import "./PlaylistCard.css";
import { useNavigate } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();

  const { deletePlaylist } = usePlaylistContext();

  const playlistCardClickHandler = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <div className="PlaylistCard">
      <img
        onClick={() => playlistCardClickHandler(playlist._id)}
        className="playlist-card-image"
        src="/assets/images/113-workstation.png"
        alt=""
      />
      <p className="playlist-card-name"> {playlist.title} </p>
      <i
        onClick={() => deletePlaylist(playlist._id)}
        className="fa-solid fa-trash delete-playlist-icon"
      ></i>
    </div>
  );
};

export default PlaylistCard;
