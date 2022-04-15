import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth-context";

const WatchLaterContext = createContext();

const WatchLaterContextProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  const axios = require("axios").default;

  const { auth } = useAuthContext();

  useEffect(() => {
    if (auth.isLoggedIn) {
      (async () => {
        const watchLaterResponse = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: auth.token,
          },
        });
        setWatchLater(watchLaterResponse.data.watchlater);
      })();
    } else {
      setWatchLater([]);
    }
  }, [auth]);

  const addVideoToWatchLater = async (video) => {
    try {
      const addVideoWatchLaterResponse = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWatchLater(addVideoWatchLaterResponse.data.watchlater);
    } catch (err) {
      console.log(err);
    }
  };

  const removeVideoFromWatchLater = async (videoId) => {
    try {
      const removeVideoWatchLaterResponse = await axios.delete(
        `/api/user/watchlater/${videoId}`,
        {
          headers: {
            authorization: auth.token,
          },
        }
      );
      setWatchLater(removeVideoWatchLaterResponse.data.watchlater);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        setWatchLater,
        addVideoToWatchLater,
        removeVideoFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLaterContext = () => useContext(WatchLaterContext);

export { WatchLaterContextProvider, useWatchLaterContext };
