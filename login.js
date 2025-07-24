
document.getElementById("nuevo-usuario").addEventListener("click", function(e) {
  e.preventDefault();
  // Redirigir al formulario de registro
  window.location.href = "registro.html";
});

document.getElementById("formulario-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim().toLowerCase();
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensaje-error");

  fetch("usuarios.json")
    .then(response => response.json())
    .then(usuarios => {
      const usuarioValido = usuarios.find(usuario =>
        usuario.correo.toLowerCase() === correo &&
        usuario.contrasena === contrasena
      );

      if (usuarioValido) {
        mensajeError.textContent = "";
        alert(`¡Bienvenido/a ${usuarioValido.nombre}!`);
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));
        // Redireccionar a otra página, si quieres:
          window.location.href = "perfil.html";
      } else {
        mensajeError.textContent = "Correo o contraseña incorrectos.";
      }
    })
    .catch(error => {
      console.error("Error al cargar el JSON:", error);
      mensajeError.textContent = "No se pudo acceder a la base de datos.";
    });
});
