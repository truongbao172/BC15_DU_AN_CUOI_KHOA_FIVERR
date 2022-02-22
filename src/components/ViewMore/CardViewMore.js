import React from "react";
import "./Card.css";

export default function CardViewMore() {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <div>
              {/* <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
              </ul> */}
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./img/awz1himolvtv6dhrtj90.png" alt=".." />
                </div>
                <div className="carousel-item">
                  <img
                    src="./img/b3f15d96e051580b816891a95fe5aad3964a6a13.jpg"
                    alt=".."
                  />
                </div>
                <div className="carousel-item">
                  <img src="./img/bgvxwwjvtnebleeupcdn.png" alt="." />
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
        </div>
        <div className="card-footer">hello</div>
      </div>
    </div>
  );
}
