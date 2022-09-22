import React from "react";

const Result = () => {
  return (
    <div className="main-wraper">
      <div className="card">
        <div className="card-header">Sale Info</div>
        <div className="card-body">
          <div className="row">
            <table className="table table-bordered border-dark info w-100">
              <tbody>
                <tr>
                  <td className="tbwd1">M.R.P.</td>
                  <td className="tbwd">
                    <span id="mrp"></span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">DP</td>
                  <td className="tbwd">
                    <span id="dpres"></span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Cash Bal</td>
                  <td className="tbwd">
                    <span id="cashbal"></span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Instalment</td>
                  <td className="tbwd">
                    <span id="insres"></span>
                  </td>
                </tr>
                <tr>
                  <td className="tbwd1">Sale Date</td>
                  <td className="tbwd">
                    <span id="date"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="emi mt-4">
            <div className="row">
              <div className="col-sm-6">
                Cash Price: <b id="cashres"></b>
              </div>
              <div className="col-sm-6">
                {" "}
                Hire Price: <b id="hireres"></b>
              </div>

              <table className="table table-bordered border-dark">
                <thead>
                  <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Date</th>
                    <th scope="col">3 Month</th>
                    <th scope="col">
                      <b id="termres"></b> Month
                    </th>
                    <th scope="col">Credit BAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <span id="insdate"></span>
                    </td>
                    <td>
                      <span id="inst3"></span>
                    </td>
                    <td>
                      <span id="instterm"></span>
                    </td>
                    <td>
                      {" "}
                      <span id="creditbal"></span>
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
