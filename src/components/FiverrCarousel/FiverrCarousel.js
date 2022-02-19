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
      <Carousel effect="fade">
        <div className="carousel-img">
          <img src="./img/bg-hero-5-1792-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-signup-1400-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-hero-5-1792-x1.png" alt="" />
        </div>
        <div className="carousel-img">
          <img src="./img/bg-signup-1400-x1.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
