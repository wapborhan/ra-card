import React, { Component } from "react";
import Result from "./Result";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashPrice: 0,
      dp: 0,
      condition: 0,
      percentage: 0,
      term: 0,
      isSubmitDisabled: true,
      interest: 0,
      hirePrice: 0,
      cashBalance: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.setState({
          hirePrice: this.hireprice(),
          // hirePrice: this.hireprice(),
          cashBalance: this.cashBalance(),
        });
      }
    );
  }
  /* Interest */
  hireprice() {
    const { cashPrice, dp, condition, percentage, term } = this.state;
    const csh = parseInt(cashPrice);
    const bal = cashPrice - dp - condition;
    const hire = parseInt(((bal * percentage) / 100) * term);

    const hirepric = hire + csh;
    return hirepric;
  }

  // HirePrice
  // hireprice() {
  //   // console.log(this.state.cashPrice);
  //   console.log(this.state.interest);
  //   return this.state.cashPrice + this.state.interest;
  // }
  // cashBalance
  cashBalance() {
    const { cashPrice, dp, condition, percentage, term, hirePrice } =
      this.state;
    const dpitn = parseInt(dp);
    const conditionin = parseInt(condition);
    const dpcondt = parseInt(dpitn + conditionin);
    console.log(dpcondt);

    return this.hireprice() - dpcondt;
  }

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
                  {/* <div className="d-flex justify-content-center">
                    <button
                      id="calculate"
                      className="w-100 btn-success btn"
                      disabled={this.state.isSubmitDisabled}
                    >
                      Calculate
                    </button>
                  </div> */}
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
