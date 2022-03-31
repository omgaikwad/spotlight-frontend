import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import { Link } from "react-router-dom";
import { useFilterContext } from "../../context/filter-context";

const Landing = () => {
  const { videoListDispatch } = useFilterContext();

  return (
    <div className="Landing">
      <Navbar />
      <main>
        <div className="cta-container">
          <div className="left-cta-container">
            <img
              src="/assets/images/Video tutorial-rafiki.svg"
              alt=""
              className="vector-image"
            />
          </div>
          <div className="right-cta-container">
            <h1 className="cta-heading">
              Discover the hidden talents from the globe
            </h1>
            <h1 className="cta-heading-2">While Learning from the Best</h1>
            <Link to="/explore" className="btn btn-primary cta-btn">
              EXPLORE
            </Link>
          </div>
        </div>

        <h2 className="category-heading">Explore by Categories</h2>
        <div className="categories-container">
          <div
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "music" })
            }
            className="category"
          >
            <Link to="/explore">
              <img
                src="/assets/images/Music_Outline.svg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Music Videos</p>
            </Link>
          </div>
          <div
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "gaming" })
            }
            className="category"
          >
            <Link to="/explore">
              <img
                src="/assets/images/Gaming_Outline.svg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Gaming</p>
            </Link>
          </div>
          <div
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "podcast" })
            }
            className="category"
          >
            <Link to="/explore">
              <img
                src="/assets/images/Podcast_Outline.svg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Podcast</p>
            </Link>
          </div>
          <div
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "tech" })
            }
            className="category"
          >
            <Link to="/explore">
              <img
                src="/assets/images/Coding_Outline.svg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Tech</p>
            </Link>
          </div>
          <div
            onClick={() =>
              videoListDispatch({ type: "CATEGORY", payload: "vlog" })
            }
            className="category"
          >
            <Link to="/explore">
              <img
                src="/assets/images/Traveling_Outline.svg"
                alt="non-fiction"
                className="category-image"
              />

              <p className="category-description">Vlogs</p>
            </Link>
          </div>
        </div>

        <footer className="landing-footer">
          <div className="landing-footer-credits">
            <a
              href="https://github.com/omgaikwad"
              className="social-media-link"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/omgaikwad1/"
              className="social-media-link"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/OmGaikwad_"
              className="social-media-link"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
