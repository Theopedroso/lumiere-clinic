:::writing{variant=“standard” id=“61003”}
/* CURSOR PREMIUM */
const cursor = document.querySelector(”.cursor”);

document.addEventListener(“mousemove”, (e) => {
cursor.style.left = e.clientX + “px”;
cursor.style.top = e.clientY + “px”;
});

/* BEFORE AFTER DRAG */
const overlay = document.getElementById(“overlay”);
const divider = document.getElementById(“divider”);

document.addEventListener(“mousemove”, (e) => {
const width = window.innerWidth;
let x = e.clientX;

overlay.style.clipPath = inset(0 ${100 - (x/width)*100}% 0 0);
divider.style.left = x + “px”;
});

/* SCROLL ANIMATION */
const sections = document.querySelectorAll(”.section”);

window.addEventListener(“scroll”, () => {
sections.forEach(sec => {
if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
sec.classList.add(“show”);
}
});
});

/* HEADER SMART */
window.addEventListener(“scroll”, () => {
document.querySelector(”.header”).style.background =
window.scrollY > 50 ? “rgba(0,0,0,0.8)” : “transparent”;
});
:::
