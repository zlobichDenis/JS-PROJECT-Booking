import {advertsData} from "./createDataObject.js";

const advertTemplate = document.querySelector('#card')
.content
.querySelector('.popup');

const advertListFragment = document.createDocumentFragment();

advertsData.forEach((advert) => {
    const advertElem = advertTemplate.cloneNode(true);
    advertElem.querySelector('.popup__title').textContent = advert.offer.title;

    advertElem.querySelector('.popup__text--address').textContent = advert.offer.adress;
    advertElem.querySelector('.popup__text--price').textContent = `${advert.offer.price}₽/ночь`;

    advertElem.querySelector('.popup__type').textContent = advert.offer.type;

    advertElem.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} для ${advert.offer.guests}`;

    advertElem.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;

    advert.offer.features.includes('wifi') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--wifi').textContent = 'wifi' : null;
    advert.offer.features.includes('dishwasher') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--dishwasher').textContent = 'dishwasher' : null;
    advert.offer.features.includes('parking') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--parking').textContent = 'parking' : null;
    advert.offer.features.includes('washer') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--washer').textContent = 'washer' : null;
    advert.offer.features.includes('elevator') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--elevator').textContent = 'elevator' : null;
    advert.offer.features.includes('conditioner') ? advertElem.querySelector('.popup__features').querySelector('.popup__feature--conditioner').textContent = 'conditioner' : null;


    advertElem.querySelector('.popup__description').textContent = advert.offer.description;

    for (let i = 0; i < advert.offer.photos.length; i++) {
        advertElem.querySelector('.popup__photos').innerHTML = "";
        advertElem.querySelector('.popup__photos').innerHTML += `<img src="${advert.offer.photos[i]}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`;
    }
    advertElem.querySelector('.popup__avatar').src = advert.author.avatar;

    advertListFragment.appendChild(advertElem);
});



export {advertTemplate};



