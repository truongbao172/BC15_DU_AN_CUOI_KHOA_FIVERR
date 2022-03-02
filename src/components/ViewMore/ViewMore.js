import React from "react";
import CardViewMore from "./CardViewMore";
import "./ViewMore.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

export default function ViewMore() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  const { arrCard } = useSelector((state) => state.DanhSachCongViecReducer);
  const renderLsitCard = () => {
    return arrCard.slice(0, 6).map((item, index) => (
      <div key={index}>
        <CardViewMore item={item} />
      </div>
    ));
  };
  return (
    <div className="container fix">
      <h2>Recently Viewed & More</h2>
      <Slider {...settings}>{renderLsitCard()}</Slider>
    </div>
  );
}
