// map object 
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

// Function to determine circle color based on the magnitude 
function getColor(magnitude){
  switch(true){
      case (magnitude <= 1):
          return '#ccff66';
          break;
      case (magnitude <= 2):
          return '#ffff66';
          break;
      case (magnitude <= 3):
          return '#ff9933';
          break;
      case (magnitude <= 4):
          return '#ff5050';
          break;
      case (magnitude <= 5):
          return '#ff0066';
          break;
      case (magnitude > 5):
          return '#990099';
          break;
      default:
          return '#cccccc';
          break;
  }
}