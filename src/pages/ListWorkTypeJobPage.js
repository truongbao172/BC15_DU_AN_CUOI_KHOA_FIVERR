import React from "react";
import ListTypeJob from "../components/ListTypeJob/ListTypeJob";
import ListMainJob from "../components/MainJob/ListMainJob";

export default function ListWorkTypeJobPage() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-3">
            <ListTypeJob />
          </div>
          <div className="col-9">
            <ListMainJob />
          </div>
        </div>
      </div>
    </div>
  );
}
