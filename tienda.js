// Precios de los productos
const precios = {
  proteina: 800,
  playera: 250,
  toalla: 150
};

// Elementos del DOM
const inputs = document.querySelectorAll('input[type="number"]');
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const botonOrden = document.getElementById("enviar-orden");
const mensajeCompra = document.getElementById("mensaje-compra");


// Escuchar cambios en las cantidades
inputs.forEach(input => {
  input.addEventListener("input", actualizarCarrito);
});

// Función para actualizar el carrito
function actualizarCarrito() {
  let total = 0;
  let resumen = "";

  inputs.forEach(input => {
    const cantidad = parseInt(input.value) || 0;
    const producto = input.dataset.producto;
    const precio = precios[producto];

    if (cantidad > 0) {
      const subtotal = cantidad * precio;
      total += subtotal;
      resumen += `<li>${cantidad} x ${producto} = $${subtotal} MXN</li>`;
      Toastify({
        text: "Producto agregado al carrito",
        duration: 5000,
        gravity: "bottom",
        position: "center",
        backgroundColor: "blue"
      }).showToast()
    }
  });

  listaCarrito.innerHTML = resumen || "<li>No hay productos en el carrito.</li>";
  totalElemento.textContent = total;
}

// Simular envío de orden
botonOrden.addEventListener("click", () => {
  if (totalElemento.textContent === "0") {
     //mensajeCompra.textContent = "Tu carrito está vacío";
    Toastify({
    text: "Tu carrito está vacío",
    duration: 5000,
    gravity: "bottom",
    position: "center",
    backgroundColor: "red"
  }).showToast()
    /* alert("Tu carrito está vacío."); */
    return;
  }

  // Reiniciar carrito
  inputs.forEach(input => input.value = 0);
  //mensajeCompra.textContent = "!Tu orden fue enviada con éxito!. Podrás recoger tus artículos en la sucursal mañana. Muchas gracias por tu compra =D";
  Toastify({
    text: "Orden enviada con éxito. Podrás recoger tus productos mañana en tu sucursal",
    duration: 5000,
    gravity: "bottom",
    position: "center",
    backgroundColor: "green"

  }).showToast()
  actualizarCarrito();
});

//Regreso al perfil
document.getElementById("btn-perfil").addEventListener("click", () => {
  window.location.href = "perfil.html";
});

// Cerrar sesión
document.getElementById("btn-cerrar-sesion").addEventListener("click", () => {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "index.html";
});
