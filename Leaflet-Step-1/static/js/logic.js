// map object to an array of layers we created.
var mymap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Selectable backgrounds of our map - tile layers:
// grayscale background.
var graymap_background = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// adding one 'graymap' tile layer to the map.
graymap_background.addTo(mymap);

