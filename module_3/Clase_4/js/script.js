$().ready(function() {

    var firsthref = $('.menu > ul > li').first().find('a');
    $('#content').load(firsthref.attr('href'));

    $('.menu > ul > li > a').click(function() {
        var href = $(this).attr('href');

        $('#content').slideToggle(500, function() {
            $(this).load(href).slideToggle(500);
        });
        console.log(href);
        if (href == "blog.html") {
            renderCategories();
            //renderNews();
        }

        event.preventDefault();
    });


});

function renderCategories() {

    var cats = $('#categories');
    var ul = document.createElement('ul');
    $.each(categories, function(index, data) {
        console.log(data);
        var li = document.createElement('li');
        var a = document.createElement('ul');

        $(a).html(data).attr('href', '#');
        $(li).append(a);
        $(ul).append(li);
    });
    console.log(ul);
    $(cats).html(ul);
    console.log(cats);
}