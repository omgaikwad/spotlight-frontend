import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const playlistResponse = await axios.get("/api/user/playlists", {
          headers: {
            authorization: auth.token,
          },
        });
        console.log("playlist response", playlistResponse);
        setPlaylist(playlistResponse.data.playlists);
      })();
    } else {
      setPlaylist([]);
    }
  }, [auth]);

  const createNewPlaylist = async (playlistName) => {
    try {
      const newPlaylistResponse = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: playlistName, description: "" },
        },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      console.log("create new playlist", newPlaylistResponse);
      setPlaylist(newPlaylistResponse.data.playlists);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const deletePlaylistResponse = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setPlaylist(deletePlaylistResponse.data.playlists);
    } catch (err) {
      console.log(err);
    }
  };

  const addVideoToPlaylist = async (video, playlistId) => {
    try {
      const addVideoResponse = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );

      setPlaylist([
        ...playlist.filter((item) => item._id != playlistId),
        addVideoResponse.data.playlist,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideoFromPlaylist = async (videoId, playlistId) => {
    try {
      const deleteVideoPlaylistResponse = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );

      const newPlaylist = playlist.filter((item) => item._id !== playlistId);

      setPlaylist([...newPlaylist, deleteVideoPlaylistResponse.data.playlist]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        setPlaylist,
        createNewPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistContextProvider, usePlaylistContext };
