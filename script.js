const $ = (id) => {
  return document.getElementsByClassName(id);
};

/* --------------------------------------------------------------------- */

const carts = $("cart-icon");
for (let cart of carts) {
  cart.addEventListener("click", (e) => {
    if (e.target.nextElementSibling)
      e.target.nextElementSibling.style.display = "block";
    e.stopPropagation();
    /* --- note: so that this event may not hit the body's event listener -- */
    /* ------------------------ event bubbles stops ------------------------ */
  });
}
document.body.addEventListener("click", () => {
  let modals = $("modal");

  for (let modal of modals) {
    modal.style.display = "none";
  }
});

/* --------------------------------------------------------------------- */

const modals = $("modal");
for (let modal of modals) {
  modal.addEventListener("click", (e) => {
    /* ----------------- working with child from its parent ---------------- */
    let price =
      e.target.parentElement.parentElement.parentElement.querySelector(
        ".price"
      );
    let pcs =
      e.target.parentElement.parentElement.parentElement.querySelector(".pcs");

    let quantity =
      e.target.parentElement.parentElement.querySelector(".quantity");
    /* --------------------- event delegation performed -------------------- */
    if (!quantity || !price) return;
    let newQuantity;

    if (e.target.className.includes("fa-plus")) {
      newQuantity = parseFloat(quantity.innerText) + 1;
    } else if (e.target.className.includes("fa-minus")) {
      newQuantity = parseFloat(quantity.innerText) - 1;
      if (newQuantity == -1) return;
    } else {
      return;
    }
    price.innerText = newQuantity * parseFloat(price.getAttribute("price"));
    quantity.innerText = pcs.innerText = newQuantity;
    updateTotal();
    e.stopPropagation();
  });
}
/* ---------------------------- calculation ---------------------------- */
