const pianoKeys = document.querySelectorAll(".piano-keys .key")

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src=`src/tunes/${key}.wav`
    audio.play();
    
    const clickkeyKey = document.querySelector (`[data-key= "${key}"]`)
    clickkeyKey.classList.add("active")
    setTimeout(()  => {
        clickkeyKey.classList.remove("active");
    }, 150);
};


pianoKeys.forEach((key) => {
    key.addEventListener("click", () =>  playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {

    if(mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
} );