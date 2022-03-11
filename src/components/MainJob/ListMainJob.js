import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ListMainJob.css";
export default function ListMainJob() {
  const { arrLWMain } = useSelector((state) => state.ListTypeJobReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    await axios
      .get("https://fiverr.cybersoft.edu.vn/api/jobs/", {
        headers: {
          tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0",
        },
      })
      .then(
        (response) => {
          dispatch({
            type: "GET_WORKMAIN",
            arrLWMain: response.data,
          });
        },
        (error) => {
          var status = error.response.status;
        }
      );
  }, []);

  // console.log("danhsahc", arrLWMain);
  const renderLWMain = () => {
    return arrLWMain.slice(10, 30).map((item, index) => {
      return (
        <div className="col-4 pb-3" key={index}>
          <div class="card text-left">
            <img class="card-img-top" src={item?.image} alt="" />
            <div class="card-body">
              <h5 class="card-title">
                <a href="/listwork">{item.type?.name}</a>
              </h5>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div id="main_job">
      <div class="row">{renderLWMain()}</div>
    </div>
  );
}
