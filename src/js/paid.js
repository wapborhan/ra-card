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
  let term = parseInt(document.getElementById("term").value);

  //Show Cash Price
  document.getElementById("rescashprice").innerHTML = cashprice;

  //Show DP
  document.getElementById("resdp").innerHTML = dp;

  //Show Condition
  document.getElementById("rescondition").innerHTML = condition;

  //Show Collection
  document.getElementById("rescollection").innerHTML = collection;

  //Show All Collection
  document.getElementById("totalpay").innerHTML = allcoll;

  //Show Term
  document.getElementById("resterm").innerHTML = term + " Months";

  // Show Hire Price
  var casbl = cashprice - dpcond;

  var casper = (casbl * percantage) / 100;
  var hire = casper * term;
  var hireprice = cashprice + hire;
  var parhire = parseFloat(hireprice);
  document.getElementById("mrp").innerHTML = parhire;
});
