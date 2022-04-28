import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useFilterContext } from "../../context/filter-context";
import { usePlaylistContext } from "../../context/playlist-context";
import "./Playlist.css";

const Playlist = () => {
  const { videoListState } = useFilterContext();

  const {
    playlist,
    createNewPlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylistContext();

  const playlistArr = [...videoListState.playlist];
  return (
    <div className="Playlist video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="video-content-container">
        <h2 className="page-heading playlist-page-heading">Playlists</h2>
        <div className="video-container">
          {[...playlist].map((playlist) => {
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
