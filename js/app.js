let popup = document.getElementById("myPopup");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
const d = document;

btn.onclick = function () {
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.style.display = "block";
  });
};

span.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

