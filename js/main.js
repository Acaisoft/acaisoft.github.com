var offset = -120;
if (Modernizr.mq('(max-width: 768px)')) {
  offset = -50;
}

$.localScroll({hash: true, offset: offset});

$('body').scrollspy({target: '.navbar-collapse', offset: -offset+10});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
	  zoom: 11,
	  center: new google.maps.LatLng(52.1748753,21.0692339,17),
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

	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
	  position: new google.maps.LatLng(52.1748753,21.0692339,17),
	  map: map,
	  title: 'Acaisoft Office'
	});
}