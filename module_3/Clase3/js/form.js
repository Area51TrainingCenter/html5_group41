$().ready(function() {

    $("#register-form").validate({
        rules: {
            nombre: "required",
            apellido: "required"           
        }
    });

});