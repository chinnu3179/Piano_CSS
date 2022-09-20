const c3 = new Audio("audios/c3.mp3");
const c_3 = new Audio("audios/c-3.mp3");
const d3 = new Audio("audios/d3.mp3");
const d_3 = new Audio("audios/d-3.mp3");
const e3 = new Audio("audios/e3.mp3");
const f3 = new Audio("audios/f3.mp3");
const f_3 = new Audio("audios/f-3.mp3");
const g3 = new Audio("audios/g3.mp3");
const g_3 = new Audio("audios/g-3.mp3");
const a3 = new Audio("audios/a3.mp3");
const a_3 = new Audio("audios/a-3.mp3");
const b3 = new Audio("audios/b3.mp3");

const  c4 = new Audio("audios/c4.mp3");
const c_4 = new Audio("audios/c-4.mp3");
const  d4 = new Audio("audios/d4.mp3");
const d_4 = new Audio("audios/d-4.mp3");
const  e4 = new Audio("audios/e4.mp3");
const  f4 = new Audio("audios/f5.mp3");
const f_4 = new Audio("audios/f-4.mp3");
const  g4 = new Audio("audios/g4.mp3");
const g_4 = new Audio("audios/g-4.mp3");
const  a4 = new Audio("audios/a4.mp3");
const a_4 = new Audio("audios/a-4.mp3");
const  b4 = new Audio("audios/b4.mp3");

const c5 = new Audio("audios/c5.mp3");
const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 1), 400);
    setTimeout(() => (clone.volume = 0.8), 500);
    setTimeout(() => (clone.volume = 0.7), 700);
    setTimeout(() => (clone.volume = 0.6), 900);
    setTimeout(() => (clone.volume = 0.5), 1000);
    setTimeout(() => (clone.volume = 0.3), 1500);
    setTimeout(() => (clone.volume = 0.2), 2000);
};

const c3key = document.querySelector(".c3");
const playc3 = () => {
  playSound(c3);
  c3key.classList.add("active");
  setTimeout(() => c3key.classList.remove("active"), 250);
};
c3key.addEventListener("click", playc3);

const c_3key = document.querySelector(".c_3");
const playc_3 = () => {
  playSound(c_3);
  c_3key.classList.add("active");
  setTimeout(() => c_3key.classList.remove("active"), 250);
};
c_3key.addEventListener("click", playc_3);

const d3key = document.querySelector(".d3");
const playd3 = () => {
  playSound(d3);
  d3key.classList.add("active");
  setTimeout(() => d3key.classList.remove("active"), 250);
};
d3key.addEventListener("click", playd3);

const d_3key = document.querySelector(".d_3");
const playd_3 = () => {
  playSound(d_3);
  d_3key.classList.add("active");
  setTimeout(() => d_3key.classList.remove("active"), 250);
};
d_3key.addEventListener("click", playd_3);

const e3key = document.querySelector(".e3");
const playe3 = () => {
  playSound(e3);
  e3key.classList.add("active");
  setTimeout(() => e3key.classList.remove("active"), 250);
};
e3key.addEventListener("click", playe3);

const f3key = document.querySelector(".f3");
const playf3 = () => {
  playSound(f3);
  f3key.classList.add("active");
  setTimeout(() => f3key.classList.remove("active"), 250);
};
f3key.addEventListener("click", playf3);

const f_3key = document.querySelector(".f_3");
const playf_3 = () => {
  playSound(f_3);
  f_3key.classList.add("active");
  setTimeout(() => f_3key.classList.remove("active"), 250);
};
f_3key.addEventListener("click", playf_3);

const g3key = document.querySelector(".g3");
const playg3 = () => {
  playSound(g3);
  g3key.classList.add("active");
  setTimeout(() => g3key.classList.remove("active"), 250);
};
g3key.addEventListener("click", playg3);


const g_3key = document.querySelector(".g_3");
const playg_3 = () => {
  playSound(g_3);
  g_3key.classList.add("active");
  setTimeout(() => g_3key.classList.remove("active"), 250);
};
g_3key.addEventListener("click", playg_3);

const a3key = document.querySelector(".a3");
const playa3 = () => {
  playSound(a3);
  a3key.classList.add("active");
  setTimeout(() => a3key.classList.remove("active"), 250);
};
a3key.addEventListener("click", playa3);


const a_3key = document.querySelector(".a_3");
const playa_3 = () => {
  playSound(a_3);
  a_3key.classList.add("active");
  setTimeout(() => a_3key.classList.remove("active"), 250);
};
a_3key.addEventListener("click", playa_3);

const b3key = document.querySelector(".b3");
const playb3 = () => {
  playSound(b3);
  b3key.classList.add("active");
  setTimeout(() => b3key.classList.remove("active"), 250);
};
b3key.addEventListener("click", playb3);

const c4key = document.querySelector(".c4");
const playc4 = () => {
  playSound(c4);
  c4key.classList.add("active");
  setTimeout(() => c4key.classList.remove("active"), 250);
};
c4key.addEventListener("click", playc4);

const c_4key = document.querySelector(".c_4");
const playc_4 = () => {
  playSound(c_4);
  c_4key.classList.add("active");
  setTimeout(() => c_4key.classList.remove("active"), 250);
};
c_4key.addEventListener("click", playc_4);

const d4key = document.querySelector(".d4");
const playd4 = () => {
  playSound(d4);
  d4key.classList.add("active");
  setTimeout(() => d4key.classList.remove("active"), 250);
};
d4key.addEventListener("click", playd4);

const d_4key = document.querySelector(".d_4");
const playd_4 = () => {
  playSound(d_4);
  d_4key.classList.add("active");
  setTimeout(() => d_4key.classList.remove("active"), 250);
};
d_4key.addEventListener("click", playd_4);

const e4key = document.querySelector(".e4");
const playe4 = () => {
  playSound(e4);
  e4key.classList.add("active");
  setTimeout(() => e4key.classList.remove("active"), 250);
};
e4key.addEventListener("click", playe4);

const f4key = document.querySelector(".f4");
const playf4 = () => {
  playSound(f4);
  f4key.classList.add("active");
  setTimeout(() => f4key.classList.remove("active"), 250);
};
f4key.addEventListener("click", playf4);

const f_4key = document.querySelector(".f_4");
const playf_4 = () => {
  playSound(f_4);
  f_4key.classList.add("active");
  setTimeout(() => f_4key.classList.remove("active"), 250);
};
f_4key.addEventListener("click", playf_4);

const g4key = document.querySelector(".g4");
const playg4 = () => {
  playSound(g4);
  g4key.classList.add("active");
  setTimeout(() => g4key.classList.remove("active"), 250);
};
g4key.addEventListener("click", playg4);


const g_4key = document.querySelector(".g_4");
const playg_4 = () => {
  playSound(g_4);
  g_4key.classList.add("active");
  setTimeout(() => g_4key.classList.remove("active"), 250);
};
g_4key.addEventListener("click", playg_4);

const a4key = document.querySelector(".a4");
const playa4 = () => {
  playSound(a4);
  a4key.classList.add("active");
  setTimeout(() => a4key.classList.remove("active"), 250);
};
a4key.addEventListener("click", playa4);


const a_4key = document.querySelector(".a_4");
const playa_4 = () => {
  playSound(a_4);
  a_4key.classList.add("active");
  setTimeout(() => a_4key.classList.remove("active"), 250);
};
a_4key.addEventListener("click", playa_4);

const b4key = document.querySelector(".b4");
const playb4 = () => {
  playSound(b4);
  b4key.classList.add("active");
  setTimeout(() => b4key.classList.remove("active"), 250);
};
b4key.addEventListener("click", playb4);

const c5key = document.querySelector(".c5");
const playc5 = () => {
  playSound(c5);
  c5key.classList.add("active");
  setTimeout(() => c5key.classList.remove("active"), 250);
};
c5key.addEventListener("click", playc5);