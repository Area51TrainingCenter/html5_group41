$(document).ready(function() {

    loadHTML();

    $('a.ver-mas').click(function() {


    });

});

function loadHTML() {

    //iterando en la lista productos
    $.each(productos, function(index, producto) {

        //creando un objeto h2 para el nombre del producto
        var nombre = document.createElement('h2');
        
        //obteniendo el contenedor de la lista
        var listcontainer = $('#product-list');
        
        //agregando el valor nombre a el objeto h2 -> nombre
        $(nombre).html(producto.nombre);
        
        //añadiendo los nombre a la lista
        $(listcontainer).append(nombre);

    });


}