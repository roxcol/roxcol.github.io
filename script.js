function openModal(id) {
    document.getElementById(id).style.display = "flex";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  // Opcional: cerrar al presionar fuera del contenido
  window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = "none";
    }
  }
  