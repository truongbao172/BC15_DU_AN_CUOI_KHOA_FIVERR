import React from "react";
import CardViewMore from "./CardViewMore";
import "./ViewMore.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ViewMore() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,

    prevArrow: (
      <button type="button" className="slick-prev pull-left">
        <i class="fas fa-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next pull-right">
        <i class="far fa-angle-right"></i>
      </button>
    ),
  };
  return (
    <div className="container fix">
      <h2>Recently Viewed & More</h2>
      <Slider {...settings}>
        <div>
          <CardViewMore />
        </div>
        <div>
          <CardViewMore />
        </div>
        <div>
          <CardViewMore />
        </div>
        <div>
          <CardViewMore />
        </div>
        <div>
          <CardViewMore />
        </div>
        <div>
          <CardViewMore />
        </div>
      </Slider>
    </div>
  );
}
