const $ = (id) => {
  return document.getElementById(id);
};

/* --------------------------------------------------------------------- */

$("cart-icon").addEventListener("click", (e) => {
  $("modal").style.display = "block";
  e.stopPropagation();
  /* --- note: so that this event may not hit the body's event listener -- */
});
document.body.addEventListener("click", () => {
  $("modal").style.display = "none";
  console.log("none");
});
$("modal").addEventListener("click", (e) => {
  e.stopPropagation();
});
