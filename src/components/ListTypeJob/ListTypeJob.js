import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ListTypeJob.css";

export default function ListTypeJob() {
  // const { arrListJob } = useSelector((state) => state.ListTypeJobReducer);
  // // console.log(arrListJob);
  // const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const result = await Axios({
        url: "https://fiverr.cybersoft.edu.vn/api/jobs",
        method: "GET",
        headers: {
          tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0",
        },
      });
      console.log(result);
    } catch (errors) {
      console.log("errors", errors);
    }
  });
  return (
    <div id="list_type_job">
      <ul className="menu_list">
        <li className="item_menu_list">
          <NavLink to="#">jhihih</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
        <li className="item_menu_list">
          <NavLink to="#">Logo Design</NavLink>
        </li>
      </ul>
    </div>
  );
}
