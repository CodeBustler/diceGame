let randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number

let randomImage1 = "img//dice" + randomNumber1 + ".png"; // random image
let randomImage2 = "img/dice" + randomNumber2 + ".png"; // random image

let image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1);

let image2 = document.querySelectorAll("img")[2];

image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".winner-result").innerHTML = "😎 Player 1 is Winner";
  document.querySelector(".winner-result").style.backgroundColor = "#865DFF";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".winner-result").innerHTML = "🤓 Player 2 is Winner";
  document.querySelector(".winner-result").style.backgroundColor = "#0E8388";
} else {
  document.querySelector(".winner-result").innerHTML = " 😍 Draw!";
  document.querySelector(".winner-result").style.backgroundColor = " green";
}
