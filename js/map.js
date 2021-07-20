import {advertsData} from "./createDataObject.js";

const STARTING_LATITUDE = 35.6804;
const STARTING_LONGITUDE = 139.7690;
const STARING_ZOOM = 9;
const MAIN_POINTER_WIDTH = 52;
const POINTER_WIDTH = 40;


var map = L.map('map-canvas').setView([STARTING_LATITUDE, STARTING_LONGITUDE], STARING_ZOOM);
const setUpMap = (advertsData) => {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGVuaXN6bG9iaWNoIiwiYSI6ImNrcmNicHBneDUwOGIycHFwcTlkc2Jsc2oifQ.HUg9WBet0wHToyPhpUzRLg'
    }).addTo(map);
    addMarkers(advertsData);
};

const addMarkers = advertsData => {
    advertsData.forEach (advert => {
        L.marker([advert.location.x, advert.location.y]).addTo(map)
    });
}






setUpMap(advertsData);
export{setUpMap}

