import { generate } from "random-words";

let word = document.createElement("h1");
let wordarea = document.querySelector("#word-generating-area");
let firstletter = "";
let count = 0;
let countvar = document.createElement("p");
let score = document.querySelector("#score");
let turn = 1;

function generation() {
  word.innerText = generate();
  console.log(word);
  wordarea.appendChild(word);
  firstletter = word.textContent.charAt(0);
  count = count + 1;
  countvar.innerText = count;
  score.appendChild(countvar);
  

}
// first time calling function
generation();

let textarea = document.querySelector("textarea");

let checkbtn = document.querySelector("#submit");

checkbtn.addEventListener("click",checkword);

// textarea.addEventListener("keydown", (event) => {
//     if (event.key === "Enter")
//       event.preventDefault(); // Prevent adding a new line in the textarea
//       const textValue = textarea.value.trim(); // Get and trim the text
//       if (textValue) {
//         checkword();
//       }
//     }
//   );

  function checkword() {
    console.log("checkbtn triggered");
    let ans = textarea.value;
    console.log(ans);
    console.log(word.textContent.charAt(0));
  
    if (ans == firstletter) {
      console.log("hurray");
      success();
    } else {
      console.log("u lost");
      failure();
    }
  }

let body = document.querySelector("body");
function success() {
  body.style.backgroundColor = "yellowgreen";
  textarea.value = "";
  generation();
}
let streak = [];
function failure() {
  body.style.backgroundColor = "crimson";
  streak.push(count);
  console.log("streak is increasing");
  console.log(streak);
  updateTable(streak, turn);
  turn += 1;
  count = 0;

  countvar.innerText = "0 .........try again or restart";
}

let table = document.querySelector("#table");

function updateTable(streak, turn) {
  let newtr = table.insertRow();
  let newtd1 = newtr.insertCell(0);
  let newtd2 = newtr.insertCell(1);

  newtd1.textContent = turn;

  streak.forEach((element) => {
    newtd2.textContent = element;
  });

  console.log(newtd1);
  console.log(newtd2);
}

let sharebtn = document.querySelector("#sharebtn");
let obj = {};

sharebtn.addEventListener("click", function () {
  let i = 1;
  streak.forEach((el) => {
    obj[i] = el;
    i++;
  });
  console.log(obj);

  let jsonString = JSON.stringify(obj);
  console.log(jsonString);

  let encodedJSON = encodeURIComponent(jsonString);
  console.log(encodedJSON);

  const whatsappURL = `https://api.whatsapp.com/send?text=${encodedJSON}`;

  window.open(whatsappURL, "_blank");
});

// function countdown() {
//   setTimeout(() => {
//     console.log("timeout");
//     failure();
//   }, 2000);
// }
