// Funciones de validación
function validarTexto(texto) {
  return /^[a-zA-Z\s]+$/.test(texto);
}

function validarEdad(edad) {
  return !isNaN(edad) && edad >= 13 && edad <= 100;
}

function validarCorreo(correo) {
  return /\S+@\S+\.\S+/.test(correo);
}

function validarContrasena(contrasena) {
  return contrasena.length >= 6;
}

function validarPeso(peso) {
  return !isNaN(peso) && peso >= 30 && peso <= 300;
}

function validarAltura(altura) {
  return !isNaN(altura) && altura >= 100 && altura <= 250;
}

function mostrarMensaje(texto, color = "red") {
  const mensaje = document.getElementById("mensaje-registro");
  mensaje.style.color = color;
  mensaje.textContent = texto;
}

// Evento de envío del formulario
document.getElementById("formulario-registro").addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const genero = document.getElementById("genero").value;
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const rutina = document.getElementById("objetivo").value;

  // Validaciones
  if (!validarTexto(nombre)) return mostrarMensaje("El nombre debe contener solo letras.");
  if (!validarTexto(apellido)) return mostrarMensaje("El apellido debe contener solo letras.");
  if (!validarEdad(edad)) return mostrarMensaje("La edad debe estar entre 13 y 100 años.");
  if (!genero) return mostrarMensaje("Selecciona un género.");
  if (!validarCorreo(correo)) return mostrarMensaje("Correo electrónico no válido.");
  if (!validarContrasena(contrasena)) return mostrarMensaje("La contraseña debe tener al menos 6 caracteres.");
  if (!validarPeso(peso)) return mostrarMensaje("Peso no válido.");
  if (!validarAltura(altura)) return mostrarMensaje("Altura no válida.");
  if (!objetivo) return mostrarMensaje("Selecciona un objetivo de entrenamiento.");

  // Crear nuevo usuario
  const nuevoUsuario = {
    nombre,
    apellido,
    edad,
    genero,
    correo,
    contrasena,
    peso,
    altura,
    rutina
  };

  // Obtener usuarios existentes
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo ya está registrado
  const existe = usuarios.some(usuario => usuario.correo === nuevoUsuario.correo);
  if (existe) return mostrarMensaje("Este correo ya está registrado.");

  // Guardar nuevo usuario
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Guardar sesión activa
  localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));

  // Mostrar mensaje de éxito
  mostrarMensaje("Registro exitoso. Redirigiendo al perfil...", "green");

  setTimeout(() => {
    window.location.href = "perfil.html";
  }, 2000);
});
