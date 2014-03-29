function loadSlider() {

    var sliderList = [];
    var thumbList = [];

    for (var index = 0; index < images.length; index++) {

        //obteniendo el objeto de la lista images
        var slide = images[index];

        //añadiendo los thumbail a nuestra lista
        thumbList.push(renderThumb(slide)); // llamando a la funcion que
        //renderiza los thumbail
    }

    //renderizando la lista de thumbails
    renderThumbList(thumbList);

}

function renderThumbList(thumbList) {

    //obteniendo el la lista para los thumbails
    var list = document.getElementById('thumbails');

    for (var index = 0; index < thumbList.length; index++) {

        //renderizando los thumbails
        list.appendChild(thumbList[index]);
    }

}

function renderThumb(slide) {

    var span = document.createElement('span');
    var image = document.createElement('img');

    image.setAttribute('src', slide.src);
    image.setAttribute('alt', slide.caption);
    image.setAttribute('title', slide.title);
    image.setAttribute('width', '120px');
    image.setAttribute('height', '120px');

    span.appendChild(image);

    return span;
}

function renderSlide() {


}