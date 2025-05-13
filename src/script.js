const dino = document.querySelector(".dino");
const kaktyc = document.querySelector(".kaktyc");
let isDzhamping = false;

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
const isDed = setInterval(() => {
  const dinoKvadratik = dino.getBoundingClientRect();
  const kaktycKvadratik = kaktyc.getBoundingClientRect();

  if (
    dinoKvadratik.right > kaktycKvadratik.left &&
    dinoKvadratik.left < kaktycKvadratik.right &&
    dinoKvadratik.bottom > kaktycKvadratik.top &&
    dinoKvadratik.top < kaktycKvadratik.bottom
  ) {
    kaktyc.style.animation = "none";
  } else {
  }
});
