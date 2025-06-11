document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("productosToggle");
  const submenu = document.getElementById("submenuProductos");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("show");
  });

  // Cerrar submenu al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove("show");
    }
  });
});
