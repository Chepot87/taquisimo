document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("menu-modal");
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.querySelector(".close");

  if (!modal || !openBtn || !closeBtn) {
    console.warn("⚠️ Algún elemento del modal no fue encontrado.");
    return;
  }

  openBtn.addEventListener("click", () => {
    modal.classList.remove("fade-out");
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 300);
  }
});
