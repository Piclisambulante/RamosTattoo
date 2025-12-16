// ===============================
// SCROLL ICON (HERO)
// ===============================
const scrollIcon = document.querySelector(".scroll-icon");

if (scrollIcon) {
  window.addEventListener("scroll", () => {
    scrollIcon.classList.toggle("hide", window.scrollY > 40);
  });
}


// ===============================
// HEADER SCROLL EFFECT
// ===============================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});


// ===============================
// LOGO GLOW FOLLOW MOUSE
// ===============================
const logo = document.querySelector(".logo-glow");

if (logo) {
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
}


// ===============================
// MODAL DO PORTFÓLIO (CORRIGIDO)
// ===============================
const modal = document.getElementById("tattooModal");
const modalImg = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-description");
const closeBtn = modal.querySelector(".gallery-close");

document.querySelectorAll(".portifolio-item").forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.dataset.image;
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.description;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
const galleryModal = document.getElementById("galleryModal");
const openGalleryBtn = document.querySelector(".portifolio-link");
const closeGalleryBtn = document.querySelector(".gallery-close");

/* ABRIR */
openGalleryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  galleryModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* FECHAR */
closeGalleryBtn.addEventListener("click", () => {
  galleryModal.classList.remove("active");
  document.body.style.overflow = "";
});

/* FILTROS */
const filterButtons = document.querySelectorAll(".filter");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
closeGalleryBtn.addEventListener("click", () => {
  closeGalleryBtn.classList.add("closing");

  setTimeout(() => {
    galleryModal.classList.remove("active");
    document.body.style.overflow = "";
    closeGalleryBtn.classList.remove("closing");
  }, 500);
});
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");

    modalImg.src = img.src;
    modalTitle.textContent = img.alt;
    modalDesc.textContent =
      "Projeto exclusivo desenvolvido com atenção máxima aos detalhes.";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
