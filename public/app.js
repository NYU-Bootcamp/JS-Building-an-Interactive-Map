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
const tour1 = L.marker([48.86395,2.34949],{icon: greenPin}).bindPopup('Cool Tourist Spot')
const tour2 = L.marker([48.86518,2.34962],{icon: greenPin}).bindPopup('Cool Tourist Spot')
const tour3 = L.marker([48.86892,2.33430],{icon: greenPin}).bindPopup('Cool Tourist Spot')
const tour4 = L.marker([48.87064,2.34256],{icon: greenPin}).bindPopup('Cool Tourist Spot')

const touristSpots = L.layerGroup([tour1, tour2, tour3, tour4]).addTo(myMap)



const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)




// Layer Control
const baseMaps = {
    "OpenStreetMap": osm
};
const overlayMaps = {
    "Stations": stations,
    "Tourist Locations": touristSpots
};

const layerControl = L.control.layers('', overlayMaps).addTo(myMap);