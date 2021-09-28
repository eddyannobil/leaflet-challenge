// Selectable backgrounds of our map - tile layers:
// grayscale background.
var graymap_background = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

// satellite background.
var satellitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    id: "mapbox.satellite",
    accessToken: API_KEY
  })  
var outdoorsmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    id: "mapbox.outdoors",
    accessToken: API_KEY
  });

// map object to an array of layers we created.
var mymap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [graymap_background, satellitemap, outdoorsmap]
});



// layers for two different sets of data, earthquakes and tectonicplates.
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// base layers
var baseMaps = {
  Satellite: satellitemap,
  Grayscale: graymap_background,
  Outdoors: outdoorsmap
};

// overlays 
var overlayMaps = {
  "Tectonic Plates": tectonicplates,
  "Earthquakes": earthquakes
};

// control which layers are visible.
L
  .control
  .layers(baseMaps, overlayMaps)
  .addTo(mymap);


  // Define the color of the marker based on the magnitude of the earthquake.
function getColor(magnitude) {
    switch (true) {
      case magnitude > 5:
        return "#ea2c2c";
      case magnitude > 4:
        return "#ea822c";
      case magnitude > 3:
        return "#ee9c00";
      case magnitude > 2:
        return "#eecc00";
      case magnitude > 1:
        return "#d4ee00";
      default:
        return "#98ee00";
    }
  }

  // Define the radius of the earthquake marker based on its magnitude.

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

  // Retrieve earthquake geoJSON data.
