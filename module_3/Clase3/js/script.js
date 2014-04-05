$(document).ready(function() {

    loadHTML();

    $('a.ver-mas').click(function() {


    });

});

function loadHTML() {

    //iterando en la lista productos
    $.each(productos, function(index, producto) {

        //creando un objeto div para contener el producto
        var container = document.createElement('div');

        //creando un objeto h2 para el nombre del producto
        var nombre = document.createElement('h2');

        //creando un objeto img para la imagen del producto
        var image = document.createElement('img');

        //creando un objeto img para la imagen del producto
        var cantidad = document.createElement('input');

        //creando un objeto img para la imagen del producto
        var agregar = document.createElement('a');

        //obteniendo el contenedor de la lista
        var listcontainer = $('#product-list');

        //agregando el valor nombre a el objeto h2 -> nombre
        $(nombre).html(producto.nombre);

        //agregando el valor nombre a el objeto h2 -> nombre
        $(agregar).html('Agregar al carrito');
        $(agregar).attr({
            'class': 'add-cart'
        });

        $(image).attr({
            'src': producto.imagen,
            'width': '120',
            'height': '120'
        });
        
        $(cantidad).attr({'type':'text'});
        
        $(container).append([nombre, image, cantidad, agregar]);

        //añadiendo los nombre a la lista
        $(listcontainer).append(container);

    });


}