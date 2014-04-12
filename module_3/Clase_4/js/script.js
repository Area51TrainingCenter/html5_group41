$().ready(function() {

    var firsthref = $('.menu > ul > li').first().find('a');
    $('#content').load(firsthref.attr('href'));

    $('.menu > ul > li > a').click(function() {
        var href = $(this).attr('href');

        $('#content').slideToggle(500, function() {
            $(this).load(href).slideToggle(500);
        });
        event.preventDefault();
    });
    
    

});
