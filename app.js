window.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const productos = data["productos"];
      const productosContainer = document.querySelector(".product-grid");

      productos.forEach((producto) => {
        const productoHTML = `
                    <div class="col">
                        <div class="card h-100">
                        <img src=${producto.source} class="card-img-top" alt="Producto 3">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Marca: ${producto.marca}</p>
                                <p class="card-text">Precio: S/${producto.precio}</p>
                                <p class="card-text">Presentación: ${producto.presentacion}</p>
                                <p class="card-text">Stock: ${producto.stock}</p>
                                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            </div>
                        </div>
                    </div>
                        
                `;
        productosContainer.innerHTML += productoHTML;
      });
    })
    .catch((error) => {
      console.error("Error al cargar los productos:", error);
    });
});
