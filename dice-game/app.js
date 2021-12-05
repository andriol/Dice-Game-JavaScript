const dice = document.querySelector(".dice");
const btn = document.querySelector(".btn");
const img = document.querySelectorAll("img");
const header = document.querySelector("h1");

// add date dynamically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// on click get random dice throws
btn.addEventListener("click", function () {
  randomNumberOne = Math.floor(Math.random() * 6) + 1;
  randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  img[0].src = `images/dice${randomNumberOne}.png`;
  img[1].src = `images/dice${randomNumberTwo}.png`;
  if (randomNumberOne > randomNumberTwo) {
    header.innerHTML = "🚩 Player One Wins! ";
  } else if (randomNumberOne < randomNumberTwo) {
    header.innerHTML = " Player Two Wins! 🚩";
  } else {
    header.innerHTML = "It's a Draw!";
  }
});
