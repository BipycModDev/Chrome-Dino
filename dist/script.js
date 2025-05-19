const dino = document.querySelector(".dino");
const kaktyc = document.querySelector(".kaktyc");
const scoreText = document.querySelector(".score-text");
const gameOver = document.querySelector(".game-over");
const finalScore = document.querySelector(".final-score");
const button = document.querySelector("button");
let isDzhamping = false;
let score = 0;
let isDedInterval;

function dzhamp() {
  if (isDzhamping) return;
  dino.classList.add("dzhamp");
  isDzhamping = true;
  setTimeout(() => {
    dino.classList.remove("dzhamp");
    isDzhamping = false;
  }, 500);
}

document.addEventListener("click", dzhamp);
function dzhamp() {
  if (isDzhamping) return;
  dino.classList.add("dzhamp");
  isDzhamping = true;
  setTimeout(() => {
    dino.classList.remove("dzhamp");
    isDzhamping = false;
  }, 500);
}

document.addEventListener("click", dzhamp);
function isDed() {
  isDedInterval = setInterval(() => {
    const dinoKvadratik = dino.getBoundingClientRect();
    const kaktycKvadratik = kaktyc.getBoundingClientRect();

    if (
      dinoKvadratik.right > kaktycKvadratik.left &&
      dinoKvadratik.left < kaktycKvadratik.right &&
      dinoKvadratik.bottom > kaktycKvadratik.top &&
      dinoKvadratik.top < kaktycKvadratik.bottom
    ) {
      clearInterval(isDedInterval);
      kaktyc.style.animation = "none";
      finalScore.textContent = "Final score: ${Math.floor(score / 100)}";
      gameOver.style.display = "block";
    } else {
      score++;
      scoreText.textContent = Math.floor(score / 100);
    }
  }, 15);
}
button.addEventListener("click", () => {
  gameOver.style.display = "none";
  score = 0;
  scoreText.textContent = "0";
  isDzhamping = false;
  kaktyc.style.animation = "kaktyc 1.5s linear infinite";
  isDed();
});
isDed();
