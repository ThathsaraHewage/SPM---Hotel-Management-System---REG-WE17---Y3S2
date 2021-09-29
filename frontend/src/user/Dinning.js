import React from "react";
import Base from "../core/Base";

import { Link } from "react-router-dom";

const Dinning = () => {
  const FirstBox = () => {
    return (
      <div className="card" style={{ width: "400%" }}>
        <h4 className="card-header bg-dark text-white text-center">Dinning</h4>
        <center>
          <ul className="list-group">            
            <Link to="/admin/foodItem/new" className="nav-link text-dark">
              Add new Food Item
            </Link>

            <li className="list-group-item">
              <Link to="/admin/foodItems" className="nav-link text-dark">
                Manage Food Items
              </Link>
            </li>
          </ul>
        </center>
      </div>
    );
  };

  return (
    <Base navigation="" title="Admin" description="Manage Dinning">
      <div className="row" className="container p-4" id="themeColor">
        <div className="col-3">{FirstBox()}</div>
        <br />
      </div>

      <center>
        <p style={{ color: "gray", fontSize: "14px" }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>
  );
};

export default Dinning;
