import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";

const LikeContext = createContext();

const LikeContextProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const likeResponse = await axios.get("/api/user/likes", {
          headers: {
            authorization: auth.token,
          },
        });
        setLikes(likeResponse.data.likes);
      })();
    } else {
      setLikes([]);
    }
  }, [auth]);

  const addVideoToLike = async (video) => {
    try {
      const videoLikeResponse = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setLikes(videoLikeResponse.data.likes);
    } catch (err) {
      console.log(err);
    }
  };

  const removeVideoFromLike = async (videoId) => {
    try {
      const removeVideoLikeResponse = await axios.delete(
        `/api/user/likes/${videoId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setLikes(removeVideoLikeResponse.data.likes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LikeContext.Provider
      value={{ likes, setLikes, addVideoToLike, removeVideoFromLike }}
    >
      {children}
    </LikeContext.Provider>
  );
};

const useLikeContext = () => useContext(LikeContext);

export { LikeContextProvider, useLikeContext };
