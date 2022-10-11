import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sale: {
        cashPrice: 0,
        dp: 0,
        condition: 0,
        percentage: 0,
        term: 0,
        interest: 0,
        hirePrice: 0,
        cashBalance: 0,
        inst3: 0,
        inst24: 0,
      },
      paid: {
        cashPrice: 0,
        dp: 0,
        condition: 0,
        percentage: 0,
        term: 0,
        interest: 0,
        hirePrice: 0,
        cashBalance: 0,
        inst3: 0,
        inst24: 0,
      },
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
          interest: this.interest(),
          cashBalance: this.cashBalance(),
          inst3: this.inst3(),
          inst24: this.inst24(),
        });
      }
    );
  }

  render() {
    return (
      <main className="containers m-4">
        <div className="row">
          <div className="col-md-5">
            <Form />
          </div>
          <div className="col-md-7">
            <Result />
          </div>
        </div>
      </main>
    );
  }
}
