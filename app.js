window.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data["productos"]);
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
      });
})