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
