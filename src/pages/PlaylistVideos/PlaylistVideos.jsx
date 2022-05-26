import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./PlaylistVideos.css";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistVideos = () => {
  const { playlistId } = useParams();

  const { playlist } = usePlaylistContext();

  const mySinglePlaylist = playlist.find((item) => item._id === playlistId);

  const { auth } = useAuthContext();

  const axios = require("axios").default;

  return (
    <div className="PlaylistVideos video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="playlist-video-container">
        <h2 className="playlist-videos-title"> {mySinglePlaylist.title} </h2>
        <div className="video-container playlist-video-list-container">
          {mySinglePlaylist.videos.map((video) => (
            <VideoCard key={video._id} video={video} playlistId={playlistId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
