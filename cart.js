$(document).ready(function() {
    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        // Obtener el carrito desde el localStorage
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        var total = 0;
        // Limpiar los elementos actuales del carrito
        $(".cart-items").empty();
        // Recorrer los productos en el carrito y mostrarlos
        carrito.forEach(function(item, index) {
            var itemHtml = `
                <div class="cart-item">
                    <h4>${item.nombre}</h4>
                    <p class="price">$${item.precio}</p>
                    <button class="remove-from-cart" data-index="${index}">Eliminar</button>
                </div>
            `;
            $(".cart-items").append(itemHtml);
            total += parseFloat(item.precio);
        });
        // Mostrar el precio total
        $("#total-price").text(total.toFixed(2));
    }

    // Inicializar el contador de productos en el carrito
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    $("#cart-count").text(carrito.length);

    // Mostrar el carrito al cargar la página
    mostrarCarrito();

    // Manejar el clic en el botón "Eliminar"
    $(document).on("click", ".remove-from-cart", function() {
        var index = $(this).data("index");
        // Obtener el carrito desde el localStorage
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        // Eliminar el producto del carrito
        carrito.splice(index, 1);
        // Actualizar el carrito en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        // Actualizar la visualización del carrito
        mostrarCarrito();
        // Actualizar el contador de productos en el carrito
        $("#cart-count").text(carrito.length);
    });
});
