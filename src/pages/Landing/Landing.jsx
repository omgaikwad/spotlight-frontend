import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <Navbar />
      <main class="main-body">
        <div class="cta-container">
          <div class="left-cta-container">
            <img
              src="/assets/images/Video tutorial-rafiki.svg"
              alt=""
              class="vector-image"
            />
          </div>
          <div class="right-cta-container">
            <h1 class="cta-heading">
              Discover the hidden talents from the globe
            </h1>
            <h1 class="cta-heading-2">While Learning from the Best</h1>
            <a href="" class="btn btn-primary cta-btn">
              EXPLORE
            </a>
          </div>
        </div>

        <h2 class="category-heading">Explore by Categories</h2>
        <div class="categories-container">
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/music-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Music Videos</p>
            </a>
          </div>
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/gaming-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Gaming</p>
            </a>
          </div>
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/tedtalk-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Ted Talks</p>
            </a>
          </div>
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/tech-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Tech</p>
            </a>
          </div>
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/vlogs-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Vlogs</p>
            </a>
          </div>
          <div class="category">
            <a href="">
              <img
                src="/assets/categories/anime-category.jpg"
                alt="non-fiction"
                class="category-image"
              />
              <p class="category-description">Anime</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
