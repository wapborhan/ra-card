import React from "react";
import Form from "./Form";
import Result from "./Result";

const index = () => {
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
};

export default index;
