import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/video-context";
import { FilterContextProvider } from "./context/filter-context";
import { AuthContextProvider } from "./context/auth-context";
import { LikeContextProvider } from "./context/like-context";
import { WatchLaterContextProvider } from "./context/watch-later-context";
import { HistoryContextProvider } from "./context/history-context";
import { PlaylistContextProvider } from "./context/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LikeContextProvider>
        <WatchLaterContextProvider>
          <HistoryContextProvider>
            <PlaylistContextProvider>
              <FilterContextProvider>
                <VideoContextProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </VideoContextProvider>
              </FilterContextProvider>
            </PlaylistContextProvider>
          </HistoryContextProvider>
        </WatchLaterContextProvider>
      </LikeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
