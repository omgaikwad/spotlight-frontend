import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./PlaylistVideos.css";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const PlaylistVideos = () => {
  const { playlistId } = useParams();
  console.log(playlistId);
  const [myPlaylist, setMyPlaylist] = useState({ videos: [] });

  const { auth } = useAuthContext();

  const axios = require("axios").default;

  useEffect(() => {
    (async () => {
      const playlistVideoResponse = await axios.get(
        `/api/user/playlists/${playlistId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setMyPlaylist(playlistVideoResponse.data.playlist);
    })();
  }, [playlistId]);

  return (
    <div className="PlaylistVideos video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="playlist-video-container">
        <h2 className="playlist-videos-title"> {myPlaylist.title} </h2>
        <div className="video-container playlist-video-list-container">
          {myPlaylist.videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
