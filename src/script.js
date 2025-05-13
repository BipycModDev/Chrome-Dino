const dino = document.querySelector(".dino");
const kaktyc = document.querySelector(".kaktyc");
let isDzhamping = false;

function dzhamp(){
	if (isDzhamping) return;
	dino.classList.add("dzhamp");
	isDzhamping=true;
	setTimeout(()=>{
		dino.classList.remove("dzhamp");
		isDzhamping=false;
	}, 500);
}

document.addEventListener("click", dzhamp);
