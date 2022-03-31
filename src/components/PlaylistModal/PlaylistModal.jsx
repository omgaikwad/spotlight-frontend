import React, { useState } from "react";
import { useFilterContext } from "../../context/filter-context";
import "./PlaylistModal.css";

const PlaylistModal = ({ setModal, video }) => {
  const { videoListState, videoListDispatch } = useFilterContext();

  const [playlistName, setPlaylistName] = useState("");

  console.log(videoListState.playlist);

  return (
    <div className="PlaylistModalBackground">
      <div className="playlist-modal-container">
        <div className="playlist-modal-title">
          <h2>Save to...</h2>
          <button onClick={() => setModal(false)} className="btn-close-modal">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="playlist-list-container">
          {videoListState.playlist.map((obj) => {
            return (
              <div key={obj.playlistId} className="add-to-playlist-container">
                <input
                  onChange={(e) => {
                    e.target.checked === true
                      ? videoListDispatch({
                          type: "ADD_TO_PLAYLIST",
                          payload: { playlist: obj, video: video },
                        })
                      : videoListDispatch({
                          type: "REMOVE_FROM_PLAYLIST",
                          payload: { playlist: obj, video: video },
                        });
                  }}
                  checked={
                    obj.playlistVideos.includes(video) ? true : undefined
                  }
                  type="checkbox"
                  name=""
                  id=""
                  className="playlist-checkbox"
                />
                <label htmlFor=""> {obj.playlistName} </label>
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
              playlistName.length != 0
                ? videoListDispatch({
                    type: "CREATE_PLAYLIST",
                    payload: playlistName,
                  })
                : null;
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
