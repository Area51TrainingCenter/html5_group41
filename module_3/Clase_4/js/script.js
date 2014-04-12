$().ready(function() {

    $('#content').load('home.html');

    $('.menu > ul > li > a').click(function() {

        var href = $(this).attr('href');

        $('#content').slideToggle(500, function() {
            $(this).load(href).slideToggle(500);
        });

        event.preventDefault();
    });


});