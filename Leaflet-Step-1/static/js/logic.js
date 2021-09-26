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

// Function to determine circle radius based on the magnitude 
function getRadius(magnitude){
    switch(true){
        case (magnitude <= 1):
            return 5;
            break;
        case (magnitude <= 2):
            return 7;
            break;
        case (magnitude <= 3):
            return 9;
            break;
        case (magnitude <= 4):
            return 11;
            break;
        case (magnitude <= 5):
            return 13;
            break;
        case (magnitude > 5):
            return 15;
            break;
        default:
            return 1;
            break;
    }
  }  
  
var GeoJSONUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(GeoJSONUrl).then(function(data){
     L.geoJson(data,{
         pointToLayer: function (feature, latlng) {
             // Create a circle marker
             return L.circleMarker(latlng, {
                 radius: getRadius(feature.properties.mag), // different radius for different magnitude
                 fillColor: getColor(feature.properties.mag), // different circle colors for different magnitude
                 color: "#000",
                 weight: 1,
                 opacity: 1,
                 fillOpacity: 0.8
                });
            },
         onEachFeature: function(feature, layer){
             layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><span>Magnitude: ${feature.properties.mag}</span>`)
            }
    }).addTo(mymap);
})     