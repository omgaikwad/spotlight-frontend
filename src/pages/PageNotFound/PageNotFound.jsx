import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound video-listing-body">
      <Navbar />
      <Sidebar />
      <div className="page-not-found-container">
        <img
          src="/assets/images/404-pageNotFound.svg"
          alt="404-page-not-found"
          className="page-not-found-vector"
        />
        <Link
          to="/explore"
          className="btn btn-primary cta-btn page-not-found-btn"
        >
          GO BACK TO EXPLORE
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
