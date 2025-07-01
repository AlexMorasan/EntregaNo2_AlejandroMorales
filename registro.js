document.getElementById("formulario-registro").addEventListener("submit", function(e) {
  e.preventDefault();

  const nuevoUsuario = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    edad: parseInt(document.getElementById("edad").value),
    genero: document.getElementById("genero").value,
    correo: document.getElementById("correo").value,
    contrasena: document.getElementById("contrasena").value,
    peso: parseFloat(document.getElementById("peso").value),
    altura: parseFloat(document.getElementById("altura").value),
    objetivo: document.getElementById("objetivo").value
  };

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si el correo ya está registrado
  const existe = usuarios.some(usuario => usuario.correo === nuevoUsuario.correo);

  const mensaje = document.getElementById("mensaje-registro");

  if (existe) {
    mensaje.style.color = "red";
    mensaje.textContent = "Este correo ya está registrado.";
    return;
  }

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Guardar sesión activa
  localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));

  mensaje.style.color = "green";
  mensaje.textContent = "Registro exitoso. Redirigiendo al perfil...";

  setTimeout(() => {
    window.location.href = "perfil.html";
  }, 2000);
});

