const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const randomNumber1  = Math.floor(Math.random() * 6 + 1);
const randomNumber2  = Math.floor(Math.random() * 6 + 1);

image1.setAttribute("src", `images/dice${randomNumber1}.png`);
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

const judge = () => {
  let displayText = "";
  if (randomNumber1 > randomNumber2) {
    displayText = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    displayText = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    displayText = "Draw!";
  }
  return displayText;
};
