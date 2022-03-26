import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
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
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/music-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Music Videos</p>
            </a>
          </div>
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/gaming-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Gaming</p>
            </a>
          </div>
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/tedtalk-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Ted Talks</p>
            </a>
          </div>
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/tech-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Tech</p>
            </a>
          </div>
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/vlogs-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Vlogs</p>
            </a>
          </div>
          <div className="category">
            <a href="">
              <img
                src="/assets/categories/anime-category.jpg"
                alt="non-fiction"
                className="category-image"
              />
              <p className="category-description">Anime</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
