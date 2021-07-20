import {getRandomParseIntNumber, getRandomFloatNumber, getRandomArray} from "./util.js";
import {typesOfHousing, timeForInspection, feuters, hotelsPhotos} from './data.js';
import {advertTemplate} from './createElemnts.js';
import {   LOCATION_PRECISION,
    MinPrices,
    deactivateMapForm,
    activateMapForm,
    fillAddress,
    adFormResetButton,
    onResetAdForm,
    adForm } from "./validate.js";
import { setUpMap } from "./map.js";


/* const getRandomParseIntNumber  = (firstNumber, endNumber) => {
    if(endNumber <= firstNumber) {
        alert('Введите корректное значение');
    }
    if(firstNumber == 0){
        return parseInt(Math.random() * endNumber);
    }
    return parseInt(Math.random() * (endNumber - firstNumber) + firstNumber);
};

const getRandomFloatNumber = (firstNumber, endNumber) => {
    if(endNumber <= firstNumber) {
        alert('Введите корректное значение');
        getNumbers();
    }
    // return alert(parseInt(Math.random() * (endNumber - firstNumber) + firstNumber));
    return parseFloat(Math.random() * (endNumber - firstNumber) + firstNumber).toFixed(4);
};


// DZ #2

const typesOfHousing = ['palace', 'flat', 'house', 'bungalow'];
const timeForInspection = ['12:00', '13:00', '14:00'];
const feuters = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const hotelsPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg','http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const getRandomArray = (array) => {
    let resultLength = getRandomParseIntNumber(1, array.length);
    let result = [];
    for (let i = 0; i < resultLength; i++) {
        let randomElem = array[getRandomParseIntNumber(0, array.length - 1)];
        if(!result.includes(randomElem)) {
            result.push(randomElem);
        }
    };
    return result;
}; */




/* const createAd = () => {
   return {
       author: {avatar: `img/avatars/user0${getRandomParseIntNumber(1, 8)}.png`},
       offer: {
           title: 'Объявление',
           adress: `{location.x}, {location.y}`,
           price: getRandomParseIntNumber(0, 99),
           type: typesOfHousing[getRandomParseIntNumber(0, 3)],
           rooms: getRandomParseIntNumber(0, 30),
           guests: getRandomParseIntNumber(1, 50),
           checkin: timeForInspection[getRandomParseIntNumber(0,2)],
           features: getRandomArray(feuters),
           description: 'Отличное место для отдыха',
           photos: getRandomArray(hotelsPhotos),
        },
        location: {
            x: getRandomFloatNumber(35.65, 35.70),
            y: getRandomFloatNumber(139.7, 139.80),
        },
   }
};

const base = new Array(10).fill(null).map(() => {
    return createAd();
}); */



// const arr = new Array(10).fill({});

/* console.log(base);

export {base, createAd}; */

