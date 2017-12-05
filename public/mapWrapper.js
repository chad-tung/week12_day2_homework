var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords, map: this.googleMap
  });
  this.markers.push(marker);
  return marker;
};


MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap,
  'click', function(event) {
    // var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    var coord = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coord)
  }.bind(this))
};

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
};

MapWrapper.prototype.unbounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(null);
  })
};
