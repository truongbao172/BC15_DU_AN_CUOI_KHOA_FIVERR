import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardViewMore from "../components/ViewMore/CardViewMore";
import _ from "lodash";
import Axios from "axios";
import { Pagination } from "antd";
export default function ListWorkPage(props) {
  const { arrCard } = useSelector((state) => state.DanhSachCongViecReducer);

  // console.log("state", arrCard);
  const dispatch = useDispatch();

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
      //đưa len reducer
      // console.log("result", result);
      dispatch({
        type: "GET_DSCV",
        arrCard: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  }, []);

  let arrayface = _.chunk(arrCard, 16);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setFollowers(arrayface[page]);
  }, [page, arrCard]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="container ">
      <main>
        <div>
          <h1>"pagination"</h1>
        </div>
        <section className="followers">
          <div className=" row">
            {followers?.map((item, index) => (
              <div className=" mb-4 col-3 " key={index}>
                <CardViewMore item={item} />
              </div>
            ))}
          </div>
          <div className="btn-container text-center mb-5">
            <Pagination
              defaultCurrent={1}
              total={arrCard.length}
              defaultPageSize={16}
              onChange={(e) => {
                handlePage(e);
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
