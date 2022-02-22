import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./FiverrCarousel.css";
const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "900px",
  textAlign: "center",
  background: "#364d79",
};
export default function FiverrCarousel() {
  return (
    <div className="Carousel">
      <Carousel effect="fade" autoplay>
        <div className="carousel-img">
          <img src="./img/bg-hero-5-1792-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-hero-2-1792-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-hero-5-1792-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-signup-1400-x1.png" alt="" />
        </div>
      </Carousel>
      <div className="Overlay">
        <div className="container">
          <div className="row ">
            <div className="col-6 carousel_content">
              <h1 className="carousel_title">
                <span>
                  Find the perfect <i>freelance</i> services for your business
                </span>
              </h1>
              <div className="search_carousel ml-2">
                <form>
                  <span>
                    <svg
                      className="float-start"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#000"
                        d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"
                      />
                    </svg>
                  </span>
                  <input
                    className="form-control"
                    type="search"
                    autoComplete="off"
                    placeholder='Try "building mobile app"'
                  />
                  <button className="btn">Search</button>
                </form>
              </div>
              <div className="popular">
                Popular:
                <ul>
                  <li>
                    <a href="">Website Design</a>
                  </li>
                  <li>
                    <a href="">WordPress</a>
                  </li>
                  <li>
                    <a href="">Logo Design</a>
                  </li>
                  <li>
                    <a href="">NFT Art</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="social_brand ">
        <span>Trusted by:</span>
        <ul>
          <li>
            <img src="./img/facebook2x.2eb3efa.png" />
          </li>
          <li>
            <img src="./img/google2x.06d74c8.png" />
          </li>
          <li>
            <img src="./img/netflix2x.887e47e.png" />
          </li>
          <li>
            <img src="./img/pandg2x.6dc32e4.png" />
          </li>
          <li>
            <img src="./img/paypal2x.22728be.png" />
          </li>
        </ul>
      </div>
    </div>
  );
}
