import {advertsData} from "./createDataObject.js";
import { advertTemplate} from "./createElemnts.js";


const STARTING_LATITUDE = 35.6804;
const STARTING_LONGITUDE = 139.7690;
const STARING_ZOOM = 11;
const MAIN_POINTER_WIDTH = 52;
const POINTER_WIDTH = 40;

let markers = [];
const map = L.map('map-canvas').setView([STARTING_LATITUDE, STARTING_LONGITUDE], STARING_ZOOM);
const setUpMap = (advertsData) => {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGVuaXN6bG9iaWNoIiwiYSI6ImNrcmNicHBneDUwOGIycHFwcTlkc2Jsc2oifQ.HUg9WBet0wHToyPhpUzRLg'
    }).addTo(map);
    renderCards(advertsData);
};


const renderCards = (advertisements) => {
    advertisements.forEach(({author, location, offer}) => {
      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [POINTER_WIDTH, POINTER_WIDTH],
        iconAnchor: [POINTER_WIDTH / 2, POINTER_WIDTH],
      });
      const lat = location.x;
      const lng = location.y;
      const marker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon,
        },
      );
  
      marker
        .addTo(map)
        .bindPopup(
          createCardElement({author, offer}),
          {
            keepInView: true,
          },
        );
      markers.push(marker);
    });
  };

const isElementVisible = (element, components) => {
    if (components.length === 0) {
      element.setAttribute('style', 'visibility: hidden;');
      return false;
    }
    element.setAttribute('style', 'visibility: visible;');
    return true;
  };

const setAdFeatures = (templateFeuters, offer) => {
    if (!isElementVisible(templateFeuters, offer.features)) {
      return;
    }
  
    templateFeuters.innerHTML = offer.features.map((feature) => {
      return `<li class="popup__feature popup__feature--${feature}"></li>`;
    }).join('');
  };

const createCardElement = ({author, offer}) => {
    const cardElement = advertTemplate.cloneNode(true);
  
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = offer.type;;
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;

    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  
    const templateFeuters = cardElement.querySelector('.popup__features'); 
    setAdFeatures(templateFeuters, offer);
 
  
    cardElement.querySelector('.popup__description').textContent = offer.description;
 
    for (let i = 0; i < offer.photos.length; i++) {
        cardElement.querySelector('.popup__photos').innerHTML = "";
        cardElement.querySelector('.popup__photos').innerHTML += `<img src="${offer.photos[i]}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`;
    }
  
    cardElement.querySelector('.popup__avatar').setAttribute('src', `${author.avatar}`);
  
    return cardElement;
  };

setUpMap(advertsData);
export{setUpMap}

