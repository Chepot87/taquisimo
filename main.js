// ==============================
// MODAL DEL MENÚ (POP-UP)
// ==============================

const modal = document.getElementById("menu-modal");
const openBtn = document.getElementById("open-menu");
const closeBtn = document.querySelector(".close");

// Abrir el modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("fade-out"); // por si se cerró antes
  modal.style.display = "block";
});

// Cerrar con botón (X)
closeBtn.addEventListener("click", closeModal);

// Cerrar con clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Función para cerrar el modal con animación
function closeModal() {
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300); // mismo tiempo que la animación CSS
}
