const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  // Data Pick
  let cashprice = parseInt(document.getElementById("cashprice").value);
  let dp = parseInt(document.getElementById("dp").value);
  let condition = parseInt(document.getElementById("condition").value);
  let percantage = parseInt(document.getElementById("purcentage").value);
  let term = parseInt(document.getElementById("term").value);

  // Show Cash Price
  document.getElementById("cashres").innerHTML = cashprice;

  // Show Hire Price
  var dpcons = cashprice + condition;
  var casbl = dpcons - dp;
  var casper = (casbl * percantage) / 100;
  var hire = casper * term;
  var hireprice = cashprice + hire;
  var parhire = parseFloat(hireprice);
  console.log(typeof cashprice);
  document.getElementById("hireres").innerHTML = parhire;

  // Show Term
  document.getElementById("termres").innerHTML = term;
});
