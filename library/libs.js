/* Chips Event*/

//cancel chips event

const deleteableChips = document.querySelectorAll(".chips-cancel");

deleteableChips.forEach((el) => el.addEventListener("click", closeChips));

function closeChips(e) {
  e.target.parentNode.classList.add("remove-chips");
  console.log("chips removed");
}

const addBtn = document.getElementById("chipsBtn");

addBtn.addEventListener("click", addChips);

function addChips(e) {
  e.preventDefault();
  let chipsVal = document.getElementById("chipsInput").value;
  if (chipsVal) {
    const el = document.createElement("span");
    el.classList.add("chips", "chips-outline");
    el.innerText = chipsVal;
    document.getElementById("chipWrapper").appendChild(el);
    document.getElementById("chipsInput").value = "";
  }
}

const dialog = document.getElementById("simpleDialog");
const btn = document.getElementsByClassName("dBtn")[0];
console.log(btn);
const span = document.getElementsByClassName("modal-close")[0];

btn.addEventListener("click", function () {
  dialog.style.display = "block";
});

span.addEventListener("click", function () {
  dialog.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == dialog) {
    dialog.style.display = "none";
  }
};
