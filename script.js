const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "Solicitação enviada com sucesso.";
    form.reset();
  });
}