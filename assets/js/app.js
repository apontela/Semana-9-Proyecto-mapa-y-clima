$(function () {
    let url = "https://api.darksky.net/forecast/aab4e857cdd49f6fb82a1af06272eb92/"
    let coords = {
        barcelona: '10.1362495,-64.6861801',
        santiago: '-33.4372,-70.6506',
        washington: '38.9041,-77.0171',
    }
    let lenguaje = 'lang=es';
    let unidades = 'units=auto'

    // let map;
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8
    //     });
    // }

    $("#ciudades").on("change", function () {
        $.ajax({
            url: url + coords[$(this).val()],
            method: "GET",
            dataType: "JSONP"
        }).then(function (data) {
            console.log(data);
            $(".resumen").append().text(data.currently.temperature)
        })

    })



});