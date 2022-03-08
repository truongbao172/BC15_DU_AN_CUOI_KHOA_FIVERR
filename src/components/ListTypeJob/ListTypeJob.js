import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ListTypeJob.css";

export default function ListTypeJob(props) {
  const { arrListJob } = useSelector((state) => state.ListTypeJobReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    await axios
      .get("https://fiverr.cybersoft.edu.vn/api/type-jobs/", {
        headers: {
          tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0",
        },
      })
      .then(
        (response) => {
          dispatch({
            type: "GET_TYPEJOB",
            arrListJob: response.data,
          });
        },
        (error) => {
          var status = error.response.status;
        }
      );
  }, []);

  const arrType = [];
  // console.log(arrListJob, "bsng");
  arrListJob.forEach((result1) => {
    return result1.subTypeJobs.forEach((result2) => {
      return arrType.push(result2.name);
    });
  });

  const renderListTypeJob = () => {
    return arrListJob?.slice(1, 2).map((item1, index1) => {
      return (
        <div key={index1}>
          <h5>{item1.name}</h5>
          <ul className="menu_list">
            {item1.subTypeJobs.map((item2, index2) => {
              return (
                <li className="item_menu_list">
                  <NavLink to="/listwork">{item2.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div id="list_type_job">
      {/* <ul className="menu_list">{renderListTypeJob()}</ul> */}
      {renderListTypeJob()}
    </div>
  );
}
