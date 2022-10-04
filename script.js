const nombre = "leandro";
const apellido = "Morillo";

const names = {
  nombre,
  apellido,
};

sessionStorage.setItem("names", JSON.stringify(names));
localStorage.setItem("names", JSON.stringify(names));

const now = new Date();
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(
  now.getTime() + 2 * 60000
)}`;
