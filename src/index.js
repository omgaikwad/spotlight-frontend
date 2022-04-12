import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./context/video-context";
import { FilterContextProvider } from "./context/filter-context";
import { AuthContextProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FilterContextProvider>
        <VideoContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VideoContextProvider>
      </FilterContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
