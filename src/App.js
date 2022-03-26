import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoCard from "./components/VideoCard/VideoCard";
import Explore from "./pages/Explore/Explore";
import History from "./pages/History/History";
import Landing from "./pages/Landing/Landing";
import Liked from "./pages/Liked/Liked";
import Login from "./pages/Login/Login";
import Playlist from "./pages/Playlist/Playlist";
import Signup from "./pages/Signup/Signup";
import WatchLater from "./pages/WatchLater/WatchLater";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
