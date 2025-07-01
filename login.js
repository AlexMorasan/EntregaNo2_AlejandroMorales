// Usuarios de prueba
let usuarios = [
  {
    nombre: "Erika",
    correo: "erika@atpfitness.com",
    contrasena: "1234",
    membresia: "Premium",
    apellido: "Sanchez",
    Edad:33,
    Genero:"Femenino",
    Peso:56,
    Altura: 160,
    Objetivo: "Pérdida de grasa"
  },
  {
    nombre: "Alejandro",
    correo: "alejandro@atpfitness.com",
    contrasena: "5678",
    membresia: "Básica",
    apellido: "Morales",
    Edad:33,
    genero:"Masculino",
    peso:80,
    altura: 170,
    objetivo: "Hipertrofia"
  }
];

// Guardar usuarios en LocalStorage si no existen
if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

document.getElementById("formulario-login").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensaje-error");

  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioEncontrado = usuariosGuardados.find(usuario => 
    usuario.correo === correo && usuario.contrasena === contrasena
  );

  if (usuarioEncontrado) {
    mensajeError.textContent = "";
    // Redirigir al perfil del usuario
    window.location.href = "perfil.html";
  } else {
    mensajeError.textContent = "Correo o contraseña incorrectos.";
  }
});

document.getElementById("nuevo-usuario").addEventListener("click", function(e) {
  e.preventDefault();
  // Redirigir al formulario de registro
  window.location.href = "registro.html";
});
