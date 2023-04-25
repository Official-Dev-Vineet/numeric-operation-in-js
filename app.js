const numberData = document.querySelector("#inputData");
const msg = document.querySelector(".msg");
const result = document.querySelector(".result");

numberData.addEventListener("keyup", (e) => dataHandler(e));
function dataHandler(e) {
  let number = Number.parseInt(e.target.value);
  number < 0
    ? (msg.innerHTML = "<p class='msg'>Please Enter Positive value :)</p>")
    : number > 0
    ? (msg.innerHTML = "<p class='result-text'>Result</p>")
    : (msg.textContent = "");
  result.textContent = "";
  number % 2 == 0 && number > 0
    ? resultShow(number)
    : number % 2 == 1
    ? resultShow(number)
    : "";
}
function resultShow(number) {
  result.innerHTML = `${number + 2} <br/> ${number + 4} <br/> ${number + 6}`;
  return numberData.removeEventListener("keyup", (e) => dataHandler(e)); // clean code for prevent extra memory consume
}
