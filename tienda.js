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
    }
  });

  listaCarrito.innerHTML = resumen || "<li>No hay productos en el carrito.</li>";
  totalElemento.textContent = total;
}

// Simular envío de orden
botonOrden.addEventListener("click", () => {
  if (totalElemento.textContent === "0") {
    alert("Tu carrito está vacío.");
    return;
  }

  alert("¡Orden enviada con éxito! Gracias por tu compra.");
  // Reiniciar carrito
  inputs.forEach(input => input.value = 0);
  actualizarCarrito();
});

