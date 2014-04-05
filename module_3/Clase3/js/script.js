$(document).ready(function() {

    loadHTML();

    loadCategories();

    $('#categories-list').find('a').click(function() {
        var datafilter = $(this).attr('data-filter');
        var productos = $('#product-list');
        $(productos).find('.producto').hide(500);
        $(productos).find('.' + datafilter).show(500);
        event.preventDefault();
    });

    $('#product-list').find('.add-cart').click(function() {

        var productid = $(this).attr('product-id');

        var cartList = $('#cart-list');

        var product = productos[productid];
        var cantidad = $('#producto-cantidad-' + productid).val();
        var container = document.createElement('div');
        var nombre = document.createElement('h3');
        var cant = document.createElement('span');

        try {
            var cantidadactual = parseInt(cantidad) + parseInt(cart[productid].cantidad);
        } catch (err) {
            var cantidadactual = cantidad;
        }

        var nuevoproducto = {
            'nombre': product.nombre,
            'cantidad': cantidadactual
        };

        cart[productid] = nuevoproducto;

        var existcontainer = $('.product-container-' + productid).find('span');

        console.log(existcontainer);

        if (existcontainer) {
            $(nombre).html(product.nombre);
            $(cant).html(cantidadactual);
            $(container).attr('class', 'product-container-' + productid);
            $(container).append([nombre, cant]);
            $(cartList).append([container]);
        } 
        event.preventDefault();
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

        var categorias = "producto " + (producto.categoria).join(" ");

        $(container).attr('class', categorias);

        //agregando el valor nombre a el objeto h2 -> nombre
        $(agregar).html('Agregar al carrito');
        $(agregar).attr({
            'class': 'add-cart',
            'href': '#',
            'product-id': index
        });

        $(image).attr({
            'src': producto.imagen,
            'width': '120',
            'height': '120'
        });

        $(cantidad).attr({
            'type': 'text',
            'id': 'producto-cantidad-' + index,
            'value': 1
        });

        $(container).append([nombre, image, cantidad, agregar]);

        //añadiendo los nombre a la lista
        $(listcontainer).append(container);

    });


}

function loadCategories() {

    var categories = $('#categories-list');

    var list = document.createElement('ul');

    $.each(categorias, function(index, categoria) {

        var item = document.createElement('li');
        var link = document.createElement('a');

        $(link).html(index + "-" + categoria);
        $(link).attr({
            'href': '#',
            'data-filter': index
        });

        $(item).append(link);
        $(list).append(item);
    });

    $(categories).append(list);
}

