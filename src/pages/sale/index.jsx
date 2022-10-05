import React, { Component } from "react";
import Result from "./Result";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashPrice: "",
      dp: "",
      condition: "",
      percentage: "",
      term: "",
      isSubmitDisabled: true,
      hirePrice: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        // use dynamic name value to set our state object property
        [event.target.name]: event.target.value,
      },
      function () {
        this.canSubmit();
      }
    );
  }

  canSubmit() {
    const { cashPrice, dp, condition, percentage, term, hirePrice } =
      this.state;
    // If Input Value is blank Button are Disable
    if (
      cashPrice.length > 0 &&
      dp.length > 0 &&
      percentage.length > 0 &&
      term.length > 0
    ) {
      this.setState({
        isSubmitDisabled: false,
      });
    } else {
      this.setState({
        isSubmitDisabled: true,
      });
    }
  }
  // triggered on submit
  handleSubmit = (event) => {
    // get our const values by destructuring state
    event.preventDefault();
    const { cashPrice, dp, condition, percentage, term, hirePrice } =
      this.state;
    // regular javascript alert function
    alert(`Your type detail: \n
           Desc: ${cashPrice} \n
           Amount: ${dp} \n
           `);
  };

  render() {
    const d = new Date();
    const day = d.getDate();
    const months = [
      "JAN",
      "FER",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = months[d.getMonth()];

    const year = d.getFullYear();
    const date = day + "-" + month + "-" + year;

    return (
      <main className="containers m-4">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">Sales Info</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3 row">
                    <label
                      htmlFor="cashprice"
                      className="col-sm-4 col-form-label"
                    >
                      Cash Price:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        name="cashPrice"
                        onChange={this.handleChange}
                        value={this.state.cashPrice}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label htmlFor="dp" className="col-sm-4 col-form-label">
                          DP:
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            name="dp"
                            onChange={this.handleChange}
                            value={this.state.dp}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <div className="row">
                        <label
                          htmlFor="condition"
                          className="col-sm-5 col-form-label"
                        >
                          Condition:
                        </label>
                        <div className="col-sm-7">
                          <input
                            type="number"
                            className="form-control"
                            name="condition"
                            onChange={this.handleChange}
                            value={this.state.condition}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <div className="col-sm-6">
                      <div className="row">
                        <label
                          htmlFor="percentage"
                          className="col-sm-4 col-form-label"
                        >
                          %:
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            name="percentage"
                            onChange={this.handleChange}
                            value={this.state.percentage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <div className="row">
                        <label
                          htmlFor="term"
                          className="col-sm-5 col-form-label"
                        >
                          Term:
                        </label>
                        <div className="col-sm-7">
                          <input
                            type="number"
                            className="form-control"
                            name="term"
                            onChange={this.handleChange}
                            value={this.state.term}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      id="calculate"
                      className="w-100 btn-success btn"
                      disabled={this.state.isSubmitDisabled}
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <Result date={date} data={this.state} />
          </div>
        </div>
      </main>
    );
  }
}
