const { createContext, useContext, useReducer } = require("react");

const FilterContext = createContext();

const videoFilterReducerFunc = (videoListState, action) => {
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
    case "WATCHLATER":
      return {
        ...videoListState,
        watchLater: videoListState.watchLater.includes(action.payload)
          ? videoListState.watchLater.filter((video) => video != action.payload)
          : [...videoListState.watchLater, action.payload],
      };
    case "HISTORY":
      return {
        ...videoListState,
        history: [...videoListState.history, action.payload],
      };
    case "CLEAR_HISTORY":
      return {
        ...videoListState,
        history: [],
      };
  }
};

const FilterContextProvider = ({ children }) => {
  const [videoListState, videoListDispatch] = useReducer(videoListReducerFunc, {
    category: "",
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

const useFilter = () => useContext(FilterContext);

export { FilterContextProvider, useFilter };
