import { Carousel } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./Card.css";
export default function CardViewMore(props) {
  const contentStyle = {
    // height: "160px",
    // color: "#fff",
    // lineHeight: "160px",
    // textAlign: "center",
    // background: "#364d79",
  };
  // console.log("du leu", props.item.image);
  return (
    <div>
      <div id="card_view_more" className="card">
        <div className="card-header">
          <div id="bscarousel" className="carousel slide" data-ride="carousel">
            <div>
              {/* <ul className="carousel-indicators">
                <li data-target="#0" data-slide-to={0} className="active" />
                <li data-target="#1" data-slide-to={1} />
                <li data-target="#2" data-slide-to={2} />
              </ul> */}
              {/* The slideshow */}
              {/* <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={props.item?.image} alt=".." />
                </div>
                <div className="carousel-item">
                  <img src={props.item?.image} alt=".." />
                </div>
              </div> */}
              <Carousel afterChange={onchange} autoplay>
                <div className="carousel-item active" style={contentStyle}>
                  <img src={props.item?.image} alt=".." />
                </div>

                <div className="carousel-item " style={contentStyle}>
                  <img src={props.item?.image} alt=".." />
                </div>
              </Carousel>

              {/* <a
                className="carousel-control-prev"
                href="#bscarousel"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#bscarousel"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card_name row">
            <div className="col-3 c-avatar">
              <img
                src={props.item.subType?.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://source.unsplash.com/random";
                }}
                alt=""
              />
            </div>

            <div className="col-9 c-name">
              <h6>
                <a href="/detail">{props.item.subType?.name}</a>
              </h6>
              <span>Lever 2 seller</span>
            </div>
          </div>
          <div className="card_title">
            <a href="detail">{props.item.name}</a>
          </div>
          <div className="c_rate">
            <ul>
              <li className="mt">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  width="15"
                  height="15"
                >
                  <path
                    fill="currentColor"
                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  ></path>
                </svg>
              </li>
              <li>
                {" "}
                <a>{props.item.rating}</a>
              </li>
              <li>
                {" "}
                <span>(182)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <div className="c-footer-left">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
              </svg>
            </span>
          </div>
          <div className="c-footer-right">
            <a>
              <small>Starting at</small>
              <span>US${props.item.price}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
