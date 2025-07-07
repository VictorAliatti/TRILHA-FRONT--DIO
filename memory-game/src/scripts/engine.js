const imagens = [
  "src/imagem/BULBASAUR.jpg",
  "src/imagem/BULBASAUR.jpg",
  "src/imagem/charmander.jpg",
  "src/imagem/charmander.jpg",
  "src/imagem/Cubone.jpg",
  "src/imagem/Cubone.jpg",
  "src/imagem/eeve.jpg",
  "src/imagem/eeve.jpg",
  "src/imagem/picachu.jpeg",
  "src/imagem/picachu.jpeg",
  "src/imagem/Psyduck.jpg",
  "src/imagem/Psyduck.jpg",
  "src/imagem/snolaxis.jpg",
  "src/imagem/snolaxis.jpg",
  "src/imagem/Squirtle.jpg",
  "src/imagem/Squirtle.jpg"
];


let openCards = [];

let shuffleImagens = imagens.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < imagens.length; i++) {
  let box = document.createElement("div");
  box.className = "item";

  let img = document.createElement("img");
  img.src = shuffleImagens[i];
  img.alt = "Pokemon";
  img.classList.add("pokemon-img");

  box.appendChild(img);
  box.onclick = handleClick;

  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const img1 = openCards[0].querySelector("img").src;
  const img2 = openCards[1].querySelector("img").src;

  if (img1 === img2) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === imagens.length) {
    alert("VOCÊ VENCEU!");
  }
}
