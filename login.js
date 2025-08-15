/* // Mostrar mensaje en el login
function mostrarMensajeLogin(texto, color = "red") {
  const mensaje = document.getElementById("mensaje-login");
  mensaje.style.color = color;
  mensaje.textContent = texto;
}

// Obtener usuarios del JSON
async function obtenerUsuariosJSON() {
  try {
    const respuesta = await fetch("usuariosjson.json");
    const datos = await respuesta.json();
    console.log("Usuarios desde JSON:",datos);
    return Array.isArray(datos) ? datos : []; // Asegura que sea un array
  } catch (error) {
    console.error("Error al cargar usuarios del JSON:", error);
    return [];
  }
}

// Obtener usuarios del LocalStorage
function obtenerUsuariosLocal() {
  const datos = JSON.parse(localStorage.getItem("usuarios"));
  console.log("Usuarios desde LocalStorage:",datos);
  return Array.isArray(datos) ? datos : [];
}

// Unir usuarios de ambas fuentes
async function obtenerTodosLosUsuarios() {
  const usuariosJSON = await obtenerUsuariosJSON();
  const usuariosLocal = obtenerUsuariosLocal();
  return [...usuariosJSON, ...usuariosLocal];
}

// Validar credenciales
function validarCredenciales(usuarios, correo, contrasena) {
  return usuarios.find(
    usuario => usuario.correo === correo && usuario.contrasena === contrasena
  );
}

// Evento del formulario de login

obtenerUsuariosJSON();
obtenerUsuariosLocal();

document.getElementById("formulario-login").addEventListener("submit", async function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo-login").value.trim();
  const contrasena = document.getElementById("contrasena-login").value;

  const todosLosUsuarios = await obtenerTodosLosUsuarios();
  console.log(todosLosUsuarios);
  const usuarioEncontrado = validarCredenciales(todosLosUsuarios, correo, contrasena);

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    mostrarMensajeLogin("Inicio de sesión exitoso. Redirigiendo...", "green");
    setTimeout(() => {
      window.location.href = "perfil.html";
    }, 2000);
  } else {
    mostrarMensajeLogin("Correo o contraseña incorrectos.");
  }
}); */

// Mostrar mensaje en el login
function mostrarMensajeLogin(texto, color = "red") {
  const mensaje = document.getElementById("mensaje-login");
  mensaje.style.color = color;
  mensaje.textContent = texto;
}

// Obtener usuarios del JSON
async function obtenerUsuariosJSON() {
  try {
    const respuesta = await fetch("usuariosjson.json");
    const datos = await respuesta.json();
    console.log("Usuarios desde JSON:", datos);
    return Array.isArray(datos) ? datos : []; // Asegura que sea un array
  } catch (error) {
    console.error("Error al cargar usuarios del JSON:", error);
    return [];
  }
}

// Obtener usuarios del LocalStorage
function obtenerUsuariosLocal() {
  const datos = JSON.parse(localStorage.getItem("usuarios"));
  console.log("Usuarios desde LocalStorage:", datos);
  return Array.isArray(datos) ? datos : [];
}

// Validar credenciales
function validarCredenciales(usuarios, correo, contrasena) {
  return usuarios.find(
    usuario => usuario.correo === correo && usuario.contrasena === contrasena
  );
}

// Evento del formulario de login
document.getElementById("formulario-login").addEventListener("submit", async function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo-login").value.trim();
  const contrasena = document.getElementById("contrasena-login").value;

  const usuariosJSON = await obtenerUsuariosJSON();       
  const usuariosLocal = obtenerUsuariosLocal();        

  const usuarioJSON = validarCredenciales(usuariosJSON, correo, contrasena);
  const usuarioLocal = validarCredenciales(usuariosLocal, correo, contrasena);

  const usuarioEncontrado = usuarioJSON || usuarioLocal;

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    mostrarMensajeLogin("Inicio de sesión exitoso. Redirigiendo...", "green");
    setTimeout(() => {
      window.location.href = "perfil.html";
    }, 2000);
  } else {
    mostrarMensajeLogin("Correo o contraseña incorrectos.");
  }
});
