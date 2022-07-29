const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  // Data Pick
  let cashprice = parseInt(document.getElementById("cashprice").value);
  let dp = parseInt(document.getElementById("dp").value);
  let condition = parseInt(document.getElementById("condition").value);
  let dpcond = dp + condition;
  let collection = parseInt(document.getElementById("collection").value);
  let allcoll = dp + condition + collection;
  let interest = parseInt(document.getElementById("interest").value);
  let term = parseInt(document.getElementById("term").value);
  let saledate = document.getElementById("saledate").value;

  //Date pick

  //Sale Date

  var d = new Date(saledate),
    month = new Array();
  (month[0] = "January"),
    (month[1] = "February"),
    (month[2] = "March"),
    (month[3] = "April"),
    (month[4] = "May"),
    (month[5] = "June"),
    (month[6] = "July"),
    (month[7] = "August"),
    (month[8] = "September"),
    (month[9] = "October"),
    (month[10] = "November"),
    (month[11] = "December");

  //Sale Date Format
  var month_name = month[d.getMonth()],
    day_of_month = d.getDate(),
    current_year = d.getFullYear(),
    monthnum = d.getMonth() + 2;

  var p = new Date();
  //Sale Date Format
  var p_month_name = month[p.getMonth()],
    p_day_of_month = p.getDate(),
    p_current_year = p.getFullYear();

  //Today
  var today = p_day_of_month + "-" + p_month_name + "-" + p_current_year;

  //Input Date
  var formatsale = day_of_month + "-" + month_name + "-" + current_year;

  // Table Data

  //Show Sale Date
  document.getElementById("inpdate").innerHTML = formatsale;

  // //Show Hire Price
  let extprice = cashprice - dpcond;
  let inter = (extprice * interest) / 100;
  let totalinter = inter * term;
  let hireprice = cashprice + totalinter;
  document.getElementById("inpcashprice").innerHTML = hireprice;

  // //Show DP
  document.getElementById("inpdp").innerHTML = dp;

  // //Show Condition
  document.getElementById("inpcondition").innerHTML = condition;

  // //Show Collection
  document.getElementById("inpcollection").innerHTML = collection;

  // //Show All Collection
  document.getElementById("inptotalpay").innerHTML = allcoll;

  // //Show Bank Interest
  document.getElementById("inpinterest").innerHTML = interest + " %";

  // //Show Term
  document.getElementById("inpterm").innerHTML = term + " Months";

  //Show Paid Date
  document.getElementById("paiddate").innerHTML = today;
});
