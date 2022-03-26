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

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
