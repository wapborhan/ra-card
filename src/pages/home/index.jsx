import React from "react";

const index = () => {
  return (
    <div className="main mt-5 mb-5">
      <div className="container">
        <div className="row m-sm-3">
          <div className="col-md-6">
            <a href="sale.html">
              <div className="card rounded ">
                <img
                  src="src/img/sale.jpg"
                  className="card-img-top img-flued"
                  alt="..."
                />
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="paid.html">
              <div className="card rounded">
                <img
                  src="src/img/paid.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
