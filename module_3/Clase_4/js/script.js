$().ready(function() {

    $('#content').load('home.html');

    $('.menu > ul > li > a').click(function() {

        var href = $(this).attr('href');

        $('#content').load(href);

        event.preventDefault();
    });


});