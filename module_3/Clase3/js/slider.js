$().ready(function() {

    loadSlider();

    $('#thumbs').find('span').bind('click', function() {

        var index = $(this).find('img').attr('image-index');
        loadSlide(index);

    });

});

function loadSlider() {

    var images = getImages('#slider-content .images');

    generateThumbs(images);

    loadSlide(0);

}
function loadSlide(index) {

    var images = getImages('#slider-content .images');

    var imageItem = images[index];
    
    var contenedor = $('#slider');
    
    $(contenedor).find('h1').html(imageItem.title);
    $(contenedor).find('p').html(imageItem.caption);
    $(contenedor).find('img').attr('src', imageItem.src);

}


function generateThumbs(images) {

    var thumbsList = $('#thumbs');


    $.each(images, function(key, value) {

        var span = document.createElement('span');
        var image = document.createElement('img');
        $(image).attr({
            'image-index': key,
            'src': value.src,
            'width': '120px',
            'height': '120px'});
        $(span).append(image);
        thumbsList.append(span);
    });

}

function getImages(identificador) {

    var list = $(identificador).find('img');

    var imagesList = [];

    $.each(list, function(key, value) {

        var image = {
            src: $(value).attr('src'),
            title: $(value).attr('title'),
            caption: $(value).attr('caption')
        };

        imagesList.push(image);
    });

    return imagesList;

}