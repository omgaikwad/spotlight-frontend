import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useFilterContext } from "../../context/filter-context";

const Playlist = () => {
  const { videoListState, videoListDispatch } = useFilterContext();

  const playlistArr = [...videoListState.playlist];
  return (
    <div className="Playlist video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <h2 className="page-heading">Playlists</h2>
        <div className="video-container">
          {playlistArr.map((playlist) => {
            return (
              <PlaylistCard key={playlist.playlistId} playlist={playlist} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
