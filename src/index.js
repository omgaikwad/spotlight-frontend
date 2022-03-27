import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
