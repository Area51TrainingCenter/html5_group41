$().ready(function() {

    $('.email-form').hide();
    
    $("#register-form").validate({
        rules: {
            nombre: "required",
            apellidos: "required",
            fecha: {
                required: true,
                date: true
            },
            email: {
                required: true,
                email: true
            }
        }, messages: {
            nombre: "Escribe tu nombre ca*****",
            apellidos: "Escribe tu apellido miie*****",
            fecha: "Ingresa una fecha correcta"
        }
    });

    $('input[name=email]').keydown(function(e) {

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode == 65 && e.ctrlKey === true) ||
                (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $('input[name=recibir]').click(function() {

        var checked = $(this).attr('checked');

        if (checked) {
            $('.email-form').show();
        } else {
            $('.email-form').hide();
        }

    });


});