import React from "react";
import { NavLink } from "react-router-dom";
import saleIMG from "../../assets/images/sale.jpg";
import paidIMG from "../../assets/images/paid.jpg";

const index = () => {
  return (
    <div className="main mt-5 mb-5">
      <div className="container mb-5">
        <div className="row m-sm-3 mb-5">
          <div className="col-md-6">
            <NavLink to="/sale">
              <div className="card rounded ">
                <img
                  src={saleIMG}
                  className="card-img-top img-flued"
                  alt="Sale"
                />
              </div>
            </NavLink>
          </div>
          <div className="col-md-6">
            <NavLink to="/paid">
              <div className="card rounded">
                <img src={paidIMG} className="card-img-top" alt="Paid" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
