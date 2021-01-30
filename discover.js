// =============== Increase Product Quantity And Change SubTotal And Total ================ //
function ticketQuantityAndPriceHandler(ticketId,isIncrease){
  const ticketInput  = document.getElementById(ticketId);
  const ticketInputNumber = parseInt(ticketInput.value);
  let newCount = ticketInputNumber; 
  if(isIncrease == true){
    newCount = ticketInputNumber + 1;
  }
  if(isIncrease == false && ticketInputNumber > 0){
    newCount = ticketInputNumber - 1;
  }
  ticketInput.value = newCount;
  subTotal()
  total();
}

function subTotal(){
  const totalSub= getInputValueAndCost("firstClass") + getInputValueAndCost("economy");
  document.getElementById("subTotal").innerText = totalSub;
  return totalSub;
}

// ================ Update Total Cost ================== //
function total() {
  let totalCost;
  let subCost = subTotal();
  const tax = parseInt(subCost * 0.1);
  totalCost = subCost + tax;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = totalCost;
}

// ================ Get Input Value Function  ================== //
function getInputValueAndCost(id){
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseInt(inputValue);
  let ticketCost;
  if(id == "firstClass"){
    ticketCost = inputValueNumber * 150;
  }
  if(id == "economy"){
    ticketCost = inputValueNumber * 100;
  }
  return ticketCost;
}
// ================= Greeting Function ================= //
function greeting(){
  document.getElementById("hide").style.display = "none";
  document.getElementById("greeting").style.display = "block";
}