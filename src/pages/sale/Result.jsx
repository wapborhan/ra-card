import React from "react";

const Result = (props) => {
  // console.log(props);
  return (
    <div className="main-wraper">
      <div className="card">
        <div className="card-header">Sale Info</div>
        <div className="card-body">
          <div className="row">
            <table className="table table-bordered border-dark info w-100">
              <tbody>
                <tr>
                  <td className="tbwd1">Hire Price</td>
                  <td className="tbwd">
                    <span>{props.data.hirePrice}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">DP</td>
                  <td className="tbwd">
                    <span>{props.data.dp}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Condition</td>
                  <td className="tbwd">
                    <span>{props.data.condition}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Cash Bal</td>
                  <td className="tbwd">
                    <span>{props.data.cashBalance}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Interest</td>
                  <td className="tbwd">
                    <span>{props.data.interest}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Instalment</td>
                  <td className="tbwd">
                    <span>{props.data.term + " Months"}</span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Sale Date</td>
                  <td className="tbwd">
                    <span id="date">{props.saledate}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="emi mt-4">
            <div className="row">
              <div className="col-sm-6">
                Cash Price: <b> {props.data.cashPrice}</b>
              </div>
              <div className="col-sm-6">
                Hire Price: <b>{props.data.hirePrice}</b>
              </div>

              <table className="table table-bordered border-dark">
                <thead>
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Date</th>
                    <th scope="col">3 Months </th>
                    <th scope="col">
                      <b>{props.data.term}</b> Months
                    </th>
                    <th scope="col">Credit BAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <span>{props.insdate}</span>
                    </td>
                    <td>
                      <span>{props.data.inst3}</span>
                    </td>
                    <td>
                      <span>{props.data.inst24}</span>
                    </td>
                    <td>
                      <span>{props.data.cashBalance}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
