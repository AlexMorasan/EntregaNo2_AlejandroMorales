/* // Obtener usuario activo
const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
const saludo = document.getElementById("saludo-usuario");
const contenido = document.getElementById("contenido-dinamico");

// Mostrar saludo
if (usuario) {
  saludo.textContent = `Bienvenido, ${usuario.nombre}`;
} else {
  // Si no hay sesión activa, redirigir al login
  window.location.href = "index.html";
} */

  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  const saludo = document.getElementById("saludo-usuario");
  const contenido = document.getElementById("contenido-dinamico");

  // Mostrar saludo
if (usuario) {
  saludo.textContent = `Bienvenido/a, ${usuario.nombre}`;
} else {
  // Si no hay sesión activa, redirigir al login
  window.location.href = "index.html";
}

const rutinas = {
  "Pecho": [
    "Lunes: Pecho y tríceps",
    "Martes: Espalda y bíceps",
    "Miércoles: Piernas",
    "Jueves: Hombros y abdomen",
    "Viernes: Full body"
  ],
  "Pierna": [
    "Lunes: Cardio + circuito de fuerza",
    "Martes: HIIT + abdomen",
    "Miércoles: Cardio + tren inferior",
    "Jueves: HIIT + tren superior",
    "Viernes: Cardio + estiramientos"
  ],
  "Brazo": [
    "Lunes: Bíceps y tríceps",
    "Martes: Hombros + estiramientos",
    "Miércoles: Brazo + espalda",
    "Jueves: Pierna ligera + cardio",
    "Viernes: Full body + brazo"
  ],
  "Cardio": [
    "Lunes: Cinta + circuito funcional",
    "Martes: HIIT 30min + abdominales",
    "Miércoles: Bicicleta + fuerza de pierna",
    "Jueves: HIIT + tren superior",
    "Viernes: Cardio + movilidad"
  ]
};

// Mostrar rutina
document.getElementById("btn-ver-rutina").addEventListener("click", () => {
  const rutina = rutinas[usuario.rutina] || ["No se encontró rutina para tu objetivo."];
  contenido.innerHTML = `
    <h3>Tu rutina para ${usuario.rutina}</h3>
    <ul>${rutina.map(dia => `<li>${dia}</li>`).join("")}</ul>
  `;
});

// Mostrar progreso
document.getElementById("btn-ver-progreso").addEventListener("click", () => {
  const pesoAnterior = usuario.peso || 0;
  const alturaM = usuario.altura / 100;
  const imc = (usuario.peso / (alturaM * alturaM)).toFixed(2);

  contenido.innerHTML = `
    <h3>Progreso</h3>
    <p>Peso actual: ${usuario.peso} kg</p>
    <p>Altura: ${usuario.altura} cm</p>
    <p>IMC estimado: ${imc}</p>
    <p>Índice de grasa corporal estimado: ${calcularGrasaCorporal(usuario.genero, imc, usuario.edad)}%</p>
  `;
});

// Fórmula estimada de grasa corporal (YMCA modificada)
function calcularGrasaCorporal(genero, imc, edad) {
  let grasa;
  if (genero === "Masculino") {
    grasa = (1.20 * imc + 0.23 * edad - 16.2).toFixed(1);
  } else {
    grasa = (1.20 * imc + 0.23 * edad - 5.4).toFixed(1);
  }
  return grasa;
}

// Redirigir a tienda
document.getElementById("btn-tienda").addEventListener("click", () => {
  window.location.href = "tienda.html";
});

// Cerrar sesión
document.getElementById("btn-cerrar-sesion").addEventListener("click", () => {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "index.html";
});

    document.addEventListener('DOMContentLoaded', function () {
      const calendarEl = document.getElementById('calendario');

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es', // Para mostrar en español
        events: [
          {
            title: 'Piernas + Glúteos',
            start: '2025-07-24',
            backgroundColor: '#FF7F50'
          },
          {
            title: 'Cardio HIIT',
            start: '2025-07-25',
            backgroundColor: '#32CD32'
          },
          {
            title: 'Espalda + Bíceps',
            start: '2025-07-26',
            backgroundColor: '#1E90FF'
          }
          // Puedes agregar más rutinas aquí
        ]
      });
      calendar.render();
    });
