const { createContext, useContext, useEffect, useState } = require("react");
const axios = require("axios").default;

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
      } catch (err) {
        console.log("error from video-context's catch", err);
      }
    };
    getVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videoList, setVideoList }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => useContext(VideoContext);

export { VideoContextProvider, useVideoContext };
