import React from "react";

const Result = () => {
  return (
    <div className="card">
      <div className="card-header">Paid Info</div>
      <div className="card-body">
        <table className="table table-bordered border-dark info w-100">
          <thead>
            <tr>
              <th scope="col" colspan="2" className="w-50">
                Sale Info
              </th>
              <th scope="col" colspan="2" className="w-50">
                Paid Info
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tbwd1">Sale Date</td>
              <td className="tbwd">
                <span id="inpdate"></span>
              </td>
              <td className="tbwd1">Paid Date </td>
              <td className="tbwd">
                <span id="paiddate"></span>
              </td>
            </tr>
            <tr>
              <td className="tbwd1 w-25">Price</td>
              <td className="tbwd">
                <span id="inpcashprice"></span>
              </td>
              <td className="tbwd1 w-25">Price</td>
              <td className="tbwd">
                <span id="paidprice"></span>
              </td>
            </tr>
            <tr>
              <td className="tbwd1">DP</td>
              <td className="tbwd">
                <span id="inpdp"></span>
              </td>
              <td className="tbwd1">Total Months</td>
              <td className="tbwd">
                <span id="resmonth"></span>
              </td>
            </tr>
            <tr>
              <td className="tbwd1">Condition</td>
              <td className="tbwd">
                <span id="inpcondition"></span>
              </td>
              <td className="tbwd1">Bank Interest</td>
              <td className="tbwd">
                <span id="bninter"></span>
              </td>
            </tr>

            <tr>
              <td className="tbwd1">Bank Interest</td>
              <td className="tbwd">
                <span id="inpbankinter"></span>
              </td>
              <td className="tbwd1">All Instalment</td>
              <td className="tbwd">
                <span id="inpcollection"></span>
              </td>
            </tr>
            <tr>
              <td className="tbwd1">Monthly Bank Interest</td>
              <td className="tbwd">
                <span id="inpmonbaninter"></span>
              </td>
              <td className="tbwd1">Total Pay</td>
              <td className="tbwd">
                <span id="inptotalpay"></span>
              </td>
            </tr>

            <tr>
              <td className="tbwd1">Percentage (%)</td>
              <td className="tbwd">
                <span id="inpinterest"></span>
              </td>
              <td className="tbwd1">Hire Discount</td>
              <td className="tbwd">
                <span id="hiredisc"></span>
              </td>
            </tr>
            <tr>
              <td className="tbwd1">Term</td>
              <td className="tbwd">
                <span id="inpterm"></span>
              </td>
              <td className="tbwd1">Payable </td>
              <td className="tbwd">
                <span id="payable"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
