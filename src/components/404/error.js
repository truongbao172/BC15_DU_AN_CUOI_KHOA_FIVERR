import React from "react";
import { NavLink } from "react-router-dom";
import "./error.css";
export default function error(props) {
  return (
    <div id="error">
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right" style={{ marginTop: 10 }}>
              <div className="col-md-10 col-md-offset-1 pull-right">
                <img
                  className="img-error"
                  src="https://bootdey.com/img/Content/fdfadfadsfadoh.png"
                />
                <h2>404 Not Found</h2>
                <p>
                  Xin lỗi vì sự bất tiện này nhé! Website hiện đang trong quá
                  trình phát triển.
                </p>
                <div className="error-actions">
                  <NavLink to="/" className="btn btn-primary btn-lg">
                    <span className="glyphicon glyphicon-arrow-left" />
                    Back Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
