import React from "react";
import "../css/status.css";

import Done from "../assets/done.svg";
import Total from "../assets/total.svg";

const Status = () => {
  return (
    <div className="status-container">
      <div className="status-card">
        <div className="status-done">
          <button className="done-btn">
            <span>
              <img src={Done} alt="done-icon" className="done-img"/>
            </span>
            <span>
              <h5 className="done-text">10</h5>
            </span>
          </button>
        </div>
        <div className="status-total">
          <button className="total-btn">
            <span>
              <img src={Total} alt=""  className="total-img"/>
            </span>
            <span>
              <h5 className="total-text">100</h5>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
