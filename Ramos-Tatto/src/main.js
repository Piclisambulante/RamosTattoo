const scrollIcon = document.querySelector(".scroll-icon");

if (scrollIcon) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      scrollIcon.classList.add("hide");
    } else {
      scrollIcon.classList.remove("hide");
    }
  });
}
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const logo = document.querySelector(".logo-glow");

logo.addEventListener("mousemove", (e) => {
  const rect = logo.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  logo.style.setProperty("--x", `${x}%`);
  logo.style.setProperty("--y", `${y}%`);
});

logo.addEventListener("mouseleave", () => {
  logo.style.removeProperty("--x");
  logo.style.removeProperty("--y");
});
