const previousAudio = document.getElementById("anterior-seta");
const nextAudio = document.getElementById("proximo-seta");
const playOuPause = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const capitulo = document.getElementById("capitulo")
let taTocando = false;
let audioInicial = 1;
let audioFinal = 10;

playOuPause.addEventListener("click", tocarOupausar);
nextAudio.addEventListener("click", proximoAudio);
previousAudio.addEventListener("click", anteriorAudio);

function tocarAudio() {
  audio.play();
  taTocando = true;
  playOuPause.classList.add("tocando")
}
function pausarAudio() {
  audio.pause();
  taTocando = false;
  playOuPause.classList.remove("tocando")
}
function tocarOupausar() {
  if (taTocando === false) {
    tocarAudio();
  } else {
    pausarAudio();
  }
}

function proximoAudio() {
  pausarAudio();
  if (audioInicial < audioFinal) {
    audioInicial = audioInicial + 1;
    console.log(audioInicial);
  } else {
    audioInicial = 1;
  }
  capitulo.innerText = `Capítulo ${audioInicial}`
  audio.src = `audios/${audioInicial}.mp3`
}
function anteriorAudio() {
  pausarAudio();
  if (audioInicial === 1) {
    audioInicial = audioFinal;
  } else {
    audioInicial = audioInicial - 1;
  }
  capitulo.innerText = `Capítulo ${audioInicial}`
  audio.src = `audios/${audioInicial}.mp3`
}
