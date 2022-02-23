import React from "react";
import Proitem from "./Proitem";
import "./ProService.css";
import Slider from "react-slick";
export default function ProService() {
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
      <h2>Popular professional services</h2>
      <Slider {...settings}>
        <div>
          <Proitem />
        </div>
        <div>
          <Proitem />
        </div>
        <div>
          <Proitem />
        </div>
        <div>
          <Proitem />
        </div>
        <div>
          <Proitem />
        </div>
        <div>
          <Proitem />
        </div>
      </Slider>
    </div>
  );
}
