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
  confirmation()
}


// ================ Update SubTotal Cost ================== //
function subTotal() {
  let subCost;
  const firstInput = parseInt(document.getElementById("firstClass").value);
  const firstClassTicketCost = firstInput * 150;
  const ecoInput = parseInt(document.getElementById("economy").value);
  const economyTicketCost = ecoInput * 100;
  subCost = firstClassTicketCost + economyTicketCost;
  document.getElementById("subTotal").innerText = subCost;
  return subCost;
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

function greeting(){
  document.getElementById("hide").style.display = "none";
  document.getElementById("greeting").style.display = "block";
}