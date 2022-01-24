import "./library/libs.js";

let navHandle = document.getElementById("navHandle");

navHandle.addEventListener("click", () => {
  document.getElementById("drawerMenu").style.display == "none"
    ? (document.getElementById("drawerMenu").style.display = "block")
    : (document.getElementById("drawerMenu").style.display = "none");
});
