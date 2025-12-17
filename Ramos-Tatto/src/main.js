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
// MODAL DO PORTFÓLIO & GALERIA
// ===============================
const modal = document.getElementById("tattooModal");
const modalImg = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-description");
const closeBtn = modal.querySelector(".gallery-close");

function openImageModal(src, title, description) {
    modalImg.src = src;
    modalTitle.textContent = title;
    modalDesc.textContent = description || "Projeto exclusivo desenvolvido com atenção máxima aos detalhes.";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

document.querySelectorAll(".portifolio-item").forEach(item => {
    item.addEventListener("click", () => {
        openImageModal(item.dataset.image, item.dataset.title, item.dataset.description);
    });
});

document.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        openImageModal(img.src, img.alt, "Projeto exclusivo desenvolvido com atenção máxima aos detalhes.");
    });
});

if (closeBtn) closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// ===============================
// GALERIA COMPLETA (MODAL)
// ===============================
const galleryModal = document.getElementById("galleryModal");
const openGalleryBtn = document.querySelector(".portifolio-link");
const closeGalleryBtn = galleryModal?.querySelector(".gallery-close");

if (openGalleryBtn) {
    openGalleryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        galleryModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener("click", () => {
        closeGalleryBtn.classList.add("closing");
        setTimeout(() => {
            galleryModal.classList.remove("active");
            document.body.style.overflow = "";
            closeGalleryBtn.classList.remove("closing");
        }, 500);
    });
}

// Filtros da Galeria
const filterButtons = document.querySelectorAll(".filter");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        galleryCards.forEach(card => {
            card.style.display = (filter === "all" || card.dataset.category === filter) ? "block" : "none";
        });
    });
});

// ===============================
// POPUP WHATSAPP & FORMULÁRIO
// ===============================
const openPopupBtn = document.getElementById('open-whatsapp-popup');
const waPopup = document.getElementById('waPopup');
const closeWaPopup = document.getElementById('closeWaPopup');

// Abrir popup
if (openPopupBtn) {
    openPopupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        waPopup.classList.add('active');
    });
}

// Fechar popup
const closeWa = () => waPopup.classList.remove('active');
if (closeWaPopup) closeWaPopup.addEventListener('click', closeWa);

if (waPopup) {
    waPopup.addEventListener('click', (e) => {
        if (e.target === waPopup) closeWa();
    });
}

// Função de Envio
function enviarParaWhatsApp() {
    const nome = document.getElementById('nome').value;
    const tattoo = document.getElementById('tattoo').value;
    const mensagem = document.getElementById('mensagem').value;
    const local = document.getElementById('local').value;
    
    // Obs: Se você não tiver o input 'data' no HTML, essa variável ficará vazia.
    const dataInput = document.getElementById('data');
    const data = dataInput ? dataInput.value : "A combinar";

    const telefone = "5547984817923"; 

    if (!nome || !tattoo) {
        alert("Por favor, preencha pelo menos seu nome e a ideia da arte.");
        return;
    }

    // Montagem da mensagem usando crases (Template Strings)
    const texto = `Olá! Meu nome é ${nome}. Estou interessado em um(a) ${tattoo} no(a) ${local}. \n\nPreferência de data: ${data} \n\nDetalhamento: ${mensagem}`;
    
    const textoCodificado = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${textoCodificado}`;

    window.open(url, '_blank');
    closeWa(); // Fecha o popup após enviar
}

// Listener do Botão de Enviar
document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById('btnEnviarWhats'); 

    if (btnEnviar) {
        btnEnviar.addEventListener('click', (e) => {
            e.preventDefault(); 
            enviarParaWhatsApp();
        });
    }
});
