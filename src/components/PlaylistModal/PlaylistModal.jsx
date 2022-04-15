import React, { useState } from "react";
import { usePlaylistContext } from "../../context/playlist-context";
import "./PlaylistModal.css";

const PlaylistModal = ({ setModal, video }) => {
  const {
    playlist,
    createNewPlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylistContext();

  const [playlistName, setPlaylistName] = useState("");

  console.log(playlist);

  return (
    <div className="PlaylistModalBackground">
      <div className="playlist-modal-container">
        <div className="playlist-modal-title">
          <h2>Save to...</h2>
          <button onClick={() => setModal(false)} className="btn-close-modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="playlist-list-container">
          {playlist.map((obj) => {
            console.log(obj.videos.find((item) => item._id === video._id));
            return (
              <div key={obj._id} className="add-to-playlist-container">
                <input
                  onChange={(e) => {
                    e.target.checked === true
                      ? addVideoToPlaylist(video, obj._id)
                      : deleteVideoFromPlaylist(video._id, obj._id);
                  }}
                  checked={
                    obj.videos.find((item) => item._id === video._id)
                      ? true
                      : false
                  }
                  type="checkbox"
                  name=""
                  id=""
                  className="playlist-checkbox"
                />
                <label htmlFor=""> {obj.title} </label>
              </div>
            );
          })}
        </div>
        <div className="create-new-playlist-container">
          <input
            onChange={(e) => setPlaylistName(e.target.value)}
            type="text"
            placeholder="Create Playlist"
            name=""
            id="playlist-name-input"
            value={playlistName}
          />
          <button
            onClick={() => {
              playlistName.length != 0 ? createNewPlaylist(playlistName) : null;
              setPlaylistName("");
            }}
            className="btn btn-primary btn-create-playlist"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
