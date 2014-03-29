function searchNews(obj) {

    var keyvalue = obj.value;

    var objSearch = document.getElementById('result-search');

    var listSearch = [];

    objSearch.innerHTML = "";

    for (var index = 0; index < datanews.length; index++) {

        var keyvalue = new RegExp(keyvalue);

        if (keyvalue.test(datanews[index][0]) || keyvalue.test(datanews[index][1])) {
            listSearch.push(index);
        }
    }

    for (var x = 0; x < listSearch.length; x++) {

        var index = listSearch[x];

        var span = document.createElement('span');

        span.innerHTML = datanews[index][0];

        objSearch.appendChild(span);
    }

}