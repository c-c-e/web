// Lógica para el formulario de inicio de sesión
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validación básica (solo ejemplo)
    if (usuario === "admin" && password === "1234") {
      alert("Bienvenido, " + usuario + "!");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});

// Lógica para aplicar a trabajos
function aplicarTrabajo(nombreTrabajo) {
  alert("Has aplicado al puesto: " + nombreTrabajo);
}
