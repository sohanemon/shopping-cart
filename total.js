const updateTotal = () => {
  let subTotal = document.getElementById("sub-total");
  let vat = document.getElementById("vat");
  let finalTotal = document.getElementById("final-total");
  let allPrice = document.getElementsByClassName("price");
  let sum = 0;
  for (let price of allPrice) {
    sum = sum + parseFloat(price.innerText);
  }
  subTotal.innerText = sum;
  vat.innerText = sum * 0.1;
  finalTotal.innerText = sum + sum * 0.1;
};
updateTotal();
