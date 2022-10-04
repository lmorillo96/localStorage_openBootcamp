const nombre = "leandro";
const apellido = "Morillo";

sessionStorage.setItem("nombre", "apellido")
localStorage.setItem("persona", JSON.stringify({ nombre, apellido }));

document.cookie = "nombreCaducar=nombre; expires=" + new Date(2023,0,1).toUTCString();