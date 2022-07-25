const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  //Date pick
  var d = new Date(),
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

  var month_name = month[d.getMonth()],
    day_of_month = d.getDate(),
    current_year = d.getFullYear(),
    monthnum = d.getMonth() + 2;

  //Today
  var today = day_of_month + "-" + month_name + "-" + current_year;

  // Installment Date
  insday = day_of_month - 1;
  var insdate = insday + "-" + monthnum + "-" + current_year;

  // Data Pick
  let cashprice = parseInt(document.getElementById("cashprice").value);
  let dp = parseInt(document.getElementById("dp").value);
  let condition = parseInt(document.getElementById("condition").value);
  let dpcond = dp + condition;
  let percantage = parseInt(document.getElementById("purcentage").value);
  let term = parseInt(document.getElementById("term").value);

  // Show Cash Price
  document.getElementById("cashres").innerHTML = cashprice;

  // Show Hire Price
  var casbl = cashprice - dpcond;
  var casper = (casbl * percantage) / 100;
  var hire = casper * term;
  var hireprice = cashprice + hire;
  var parhire = parseFloat(hireprice);
  document.getElementById("hireres").innerHTML = parhire;

  // Show MRP
  document.getElementById("mrp").innerHTML = parhire;

  //Show DP
  document.getElementById("dpres").innerHTML = dp;

  //SHow Cash Balance
  var cashbal = parhire - dp;
  document.getElementById("cashbal").innerHTML = cashbal;

  //Show Installment
  document.getElementById("insres").innerHTML = term + " Months";

  // SHow Date
  document.getElementById("date").innerHTML = today;

  // Show Term
  document.getElementById("termres").innerHTML = term;

  //Show Installmnt Date
  document.getElementById("insdate").innerHTML = insdate;

  //SHow 3 month installment
  if (condition > 0) {
    var instal3 = cashprice - dpcond;
    var instalmon = instal3 / 3;
    document.getElementById("inst3").innerHTML = instalmon.toFixed(0);
  } else {
    var instal3 = cashprice - dp;
    var instalmon = instal3 / 3;
    document.getElementById("inst3").innerHTML = instalmon.toFixed(0);
  }

  //Show term installment
  if (condition > 0) {
    var instcond = parhire - dpcond;
    var insterm = instcond / term;
    document.getElementById("instterm").innerHTML = insterm.toFixed(0);
  } else {
    var insterm = cashbal / term;
    document.getElementById("instterm").innerHTML = insterm.toFixed(0);
  }

  //SHow Installment Bal
  document.getElementById("creditbal").innerHTML = cashbal;
});
