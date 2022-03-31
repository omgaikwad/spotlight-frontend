const { createContext, useContext, useReducer } = require("react");
import { v4 as uuid } from "uuid";

const FilterContext = createContext();

const videoListReducerFunc = (videoListState, action) => {
  switch (action.type) {
    case "CATEGORY":
      return {
        ...videoListState,
        category: action.payload,
      };
    case "LIKE":
      return {
        ...videoListState,
        likedVideo: videoListState.likedVideo.includes(action.payload)
          ? videoListState.likedVideo.filter((video) => video != action.payload)
          : [...videoListState.likedVideo, action.payload],
      };
    case "WATCH_LATER":
      return {
        ...videoListState,
        watchLater: videoListState.watchLater.includes(action.payload)
          ? videoListState.watchLater.filter((video) => video != action.payload)
          : [...videoListState.watchLater, action.payload],
      };
    case "HISTORY":
      return {
        ...videoListState,
        history: videoListState.history.includes(action.payload)
          ? [...videoListState.history]
          : [...videoListState.history, action.payload],
      };
    case "CLEAR_HISTORY":
      return {
        ...videoListState,
        history: [],
      };
    case "CREATE_PLAYLIST":
      return {
        ...videoListState,
        playlist: [
          ...videoListState.playlist,
          {
            playlistId: uuid(),
            playlistName: action.payload,
            playlistVideos: [],
          },
        ],
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...videoListState,
        playlist: videoListState.playlist.map((obj) => {
          return obj.playlistId === action.payload.playlist.playlistId
            ? {
                ...obj,
                playlistVideos: [...obj.playlistVideos, action.payload.video],
              }
            : obj;
        }),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...videoListState,
        playlist: videoListState.playlist.map((obj) => {
          return obj.playlistId === action.payload.playlist.playlistId
            ? {
                ...obj,
                playlistVideos: obj.playlistVideos.filter(
                  (video) => video._id != action.payload.video._id
                ),
              }
            : obj;
        }),
      };
  }
};

const FilterContextProvider = ({ children }) => {
  const [videoListState, videoListDispatch] = useReducer(videoListReducerFunc, {
    category: "all",
    likedVideo: [],
    watchLater: [],
    history: [],
    playlist: [],
  });
  return (
    <FilterContext.Provider value={{ videoListState, videoListDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
