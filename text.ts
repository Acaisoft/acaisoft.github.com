declare let d3: any;
declare let google: any;

let placeholder = d3.select('.text.placeholder');
let writing = d3.select('.text.writing');

let data = placeholder.selectAll('.acaisoft-message').nodes().map(n => n.textContent);

function onResize() {
    placeholder.style('display', 'block');
    let height = placeholder.style('height');
    placeholder.style('display', 'none');
    writing.style('height', height);
}
onResize();

let i = -1;
function transition() {
    i++;
    if (i >= data.length) {
        return;
    }

    var newText = data[i];
    var textLength = newText.length;
    let time = 50 * newText.length;

    writing.append('p')
        .attr('class', 'acaisoft-message')
        .transition()
        .duration(time)
        .ease(d3.easeLinear)
        .tween("text", function () {
            var node = this;
            return function (t) {
                node.textContent = newText.slice(0,
                    Math.round(t * textLength));
            };
        })
        .on('end', transition);
}

transition();

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 1,
        center: new google.maps.LatLng(50, -50),
        styles: [
            {
                "featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
            },
            {
                "featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]
            }, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {
                "featureType": "road.arterial",
                "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
            }, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {
                "featureType": "transit",
                "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
            }, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
            }, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}]
    };

    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: new google.maps.LatLng(52.174872, 21.0714279),
        map: map,
        title: 'Acaisoft Polish Office'
    });
    new google.maps.Marker({
        position: new google.maps.LatLng(37.3980153, -121.9844716),
        map: map,
        title: 'Acaisoft US Office'
    });

}