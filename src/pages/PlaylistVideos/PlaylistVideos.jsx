import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./PlaylistVideos.css";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const { videoListState } = useFilterContext();

  const myPlaylist = videoListState.playlist.find(
    (obj) => obj.playlistId === playlistId
  );

  console.log(myPlaylist);

  return (
    <div className="PlaylistVideos video-listing-body">
      <Navbar />
      <Sidebar />

      <div className="playlist-video-container">
        <h2 className="playlist-videos-title"> {myPlaylist.playlistName} </h2>
        <div className="video-container">
          {myPlaylist.playlistVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
