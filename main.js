$(document).ready(function() {
    // Función para agregar un producto al carrito y mostrar la notificación
    function agregarAlCarrito(nombre, precio) {
        // Obtener el carrito desde el localStorage
        var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        // Agregar el producto al carrito
        carrito.push({ nombre: nombre, precio: precio });
        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        // Mostrar la notificación de "Producto agregado al carrito"
        mostrarNotificacion("Producto agregado al carrito: " + nombre);
        // Actualizar el contador de productos en el carrito
        $("#cart-count").text(carrito.length);
    }

    // Función para mostrar la notificación
    function mostrarNotificacion(mensaje) {
        // Actualizar el contenido del contenedor de notificaciones
        $("#notification").text(mensaje);
        // Mostrar la notificación durante 3 segundos y luego ocultarla
        $("#notification").fadeIn().delay(3000).fadeOut();
    }

    // Escuchar el evento de clic en los botones "Agregar al carrito" en la sección de productos
    $(document).on("click", ".add-to-cart", function() {
        // Obtener la información del producto
        var nombre = $(this).siblings("h4").text();
        var precio = $(this).siblings(".price").text().replace("$", "");
        // Llamar a la función para agregar el producto al carrito
        agregarAlCarrito(nombre, precio);
    });

    // Inicializar el contador de productos en el carrito al cargar la página
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    $("#cart-count").text(carrito.length);

    // Inicializar el slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
});

