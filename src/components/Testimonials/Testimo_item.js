import React from "react";
import "./Testimo_item.css";
export default function Testimo_item() {
  return (
    <div id="testimonials" className="container">
      <div className="row">
        <div className="col-5 tes-item-img">
          <img src="./img/testimonial-video-still-rooted.jpg" alt="" />
        </div>
        <div className="col-7 test-item-content">
          <div className="text-content">
            <h5>
              Kay Kim, Co-Founder
              <span className="testimonial-logo">
                <img
                  alt="Company logo"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                  loading="lazy"
                />
              </span>
            </h5>
            <blockquote className="font-domaine">
              <i>
                "It's extremely exciting that Fiverr has freelancers from all
                over the world — it broadens the talent pool. One of the best
                things about Fiverr is that while we're sleeping, someone's
                working."
              </i>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
