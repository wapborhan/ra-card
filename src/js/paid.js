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
  var d = new Date(saledate);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Sale Date Format
  var s_month = month[d.getMonth()],
    s_monts = d.getMonth(),
    s_day = d.getDate(),
    s_year = d.getFullYear(),
    s_years = d.getYear();

  var p = new Date();
  //Sale Date Format
  var p_month = month[p.getMonth()],
    p_monts = p.getMonth(),
    p_day = p.getDate(),
    p_year = p.getFullYear(),
    p_years = p.getYear();

  //Today
  var today = p_day + "-" + p_month + "-" + p_year;
  //Input Date
  var formatsale = s_day + "-" + s_month + "-" + s_year;

  // Table Data
  //Show Sale Date
  document.getElementById("inpdate").innerHTML = formatsale;

  // //Show Hire Price
  let extprice = cashprice - dpcond;
  let moninter = (extprice * interest) / 100;
  let bankinter = moninter * term;
  let hireprice = cashprice + bankinter;
  document.getElementById("inpcashprice").innerHTML = hireprice;

  // //Show DP
  document.getElementById("inpdp").innerHTML = dp;

  // //Show Condition
  document.getElementById("inpcondition").innerHTML = condition;

  // //Show Bank Interest
  document.getElementById("inpbankinter").innerHTML = bankinter;

  // //Show Monthly Bank Interest
  document.getElementById("inpmonbaninter").innerHTML = moninter;

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

  //Paid Months
  //get years
  yearAge = p_years - s_years;

  //get months
  monthAge = p_monts - s_monts;

  let paiddate = yearAge * 12 + monthAge;

  //display the calculated age
  document.getElementById("resmonth").innerHTML = paiddate + " Months ";

  //Paid Hire Price
  let pextprice = cashprice - dpcond;
  let pmoninter = (pextprice * interest) / 100;
  let pbankinter = pmoninter * paiddate;
  let paidprice = cashprice + pbankinter;
  document.getElementById("paidprice").innerHTML = paidprice;

  //Paid Bank Interest
  document.getElementById("bninter").innerHTML = pbankinter;

  //Paid Monthly Bank Interest
  document.getElementById("hiredisc").innerHTML = hireprice - paidprice;

  //Paid Monthly Bank Interest
  var payable = paidprice - allcoll;
  document.getElementById("payable").innerHTML = payable;
});
