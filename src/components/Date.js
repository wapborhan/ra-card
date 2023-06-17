import React from "react";

const Date = () => {
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
  const saledate = day + "-" + month + "-" + year;
  const insdate = day - 1 + "-" + month + "-" + year;

  return { saledate, insdate };
};

export default Date;
