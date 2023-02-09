// Create map:                                                       
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

// Add OpenStreetMap tiles:
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

const mbSatellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJsdWVtbGVpdiIsImEiOiJjbGR3Y2JsbG0wNXdtM3BwN2kycmY5MXp2In0.Rkifjm7VC8JoZLNFzmWwjA', {
    attribution: `&copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`,
    minZoom: '15',
}).addTo(myMap)

const mbOutdoors = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJsdWVtbGVpdiIsImEiOiJjbGR3Y2JsbG0wNXdtM3BwN2kycmY5MXp2In0.Rkifjm7VC8JoZLNFzmWwjA', {
    attribution: `&copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>`,
    minZoom: '15',
}).addTo(myMap)

// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// Draw the 2nd Arrondissement
const latlngs = [                                    
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664]
]

const polygon = L.polygon(latlngs, {color: 'blue', fillOpacity: '0'}).addTo(myMap);

// create red pin marker
redPin = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

greenPin = L.icon({
    iconUrl: './assets/green-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});


// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453],{icon: redPin}).bindPopup('Réaumur-Sébastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196],{icon: redPin}).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739],{icon: redPin}).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167],{icon: redPin}).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543],{icon: redPin}).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714],{icon: redPin}).bindPopup('Grands Boulevards')

// Metro station markers:
const tour1 = L.marker([48.864983, 2.337921],{icon: greenPin}).bindPopup('Jardin du Palais Royal')
const tour2 = L.marker([48.862855, 2.329322],{icon: greenPin}).bindPopup('Tuileries Garden')
const tour3 = L.marker([48.876948, 2.346461],{icon: greenPin}).bindPopup('Parc Las Fayette')
const tour4 = L.marker([48.87923, 2.309017],{icon: greenPin}).bindPopup('Parc Monceau')
const tour5 = L.marker([48.875593, 2.354266],{icon: greenPin}).bindPopup('Prison Saint-Lazare')
const tour6 = L.marker([48.866779, 2.355446],{icon: greenPin}).bindPopup('Conservatorie National des Arts et Metiers')
const tour7 = L.marker([48.866479, 2.345109],{icon: greenPin}).bindPopup('Centre Sportif Jean Dame')

const touristSpots = L.layerGroup([tour1, tour2, tour3, tour4, tour5, tour6, tour7]).addTo(myMap)
const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)

// Layer Control
const baseMaps = {
    "Street Map": osm,
    "Satellite": mbSatellite,
    "Outdoors": mbOutdoors
};
const overlayMaps = {
    "Stations": stations,
    "Tourist Locations": touristSpots
};

const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(myMap);

myMap.on('click', function(ev) {
    alert(ev.latlng); // ev is an event object (MouseEvent in this case)
});