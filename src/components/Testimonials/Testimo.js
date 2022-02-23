import React from "react";
import Slider from "react-slick";
import "./Testimo.css";
import Testimo_item from "./Testimo_item";
export default function Testimo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div id="Testimo_slick">
      <Slider {...settings}>
        <div>
          <Testimo_item />
        </div>
        <div>
          <Testimo_item />
        </div>
      </Slider>
    </div>
  );
}
