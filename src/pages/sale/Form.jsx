import React from "react";

const Form = () => {
  return (
    <div className="card">
      <div className="card-header">Sales Info</div>
      <div className="card-body">
        <form action="">
          <div className="mb-3 row">
            <label for="cashprice" className="col-sm-4 col-form-label">
              Cash Price:
            </label>
            <div className="col-sm-8">
              <input
                type="number"
                className="form-control"
                id="cashprice"
                value="195000"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-6">
              <div className="row">
                <label for="dp" className="col-sm-4 col-form-label">
                  DP:
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="dp"
                    value="90000"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="row">
                <label for="condition" className="col-sm-5 col-form-label">
                  Condition:
                </label>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    id="condition"
                    value="5000"
                    min="1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-6">
              <div className="row">
                <label for="purcentage" className="col-sm-4 col-form-label">
                  %:
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="purcentage"
                    value="2"
                    min="1"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="row">
                <label for="term" className="col-sm-5 col-form-label">
                  Term:
                </label>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    id="term"
                    value="10"
                    min="1"
                    max="30"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            <button id="calculate" className="w-100 btn-success btn">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
