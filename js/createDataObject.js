import {getRandomParseIntNumber, getRandomFloatNumber, getRandomArray} from "./util.js";
import {typesOfHousing, timeForInspection, feuters, hotelsPhotos} from './data.js';

const createAdvertData = () => {
    return {
        author: {avatar: `img/avatars/user0${getRandomParseIntNumber(1, 8)}.png`},
        offer: {
            title: 'Объявление',
            adress: `{location.x}, {location.y}`,
            price: getRandomParseIntNumber(0, 99),
            type: typesOfHousing[getRandomParseIntNumber(0, 3)],
            rooms: getRandomParseIntNumber(0, 30),
            guests: getRandomParseIntNumber(1, 50),
            checkin: timeForInspection[getRandomParseIntNumber(0, 2)],
            checkout: timeForInspection[getRandomParseIntNumber(1, 2)],
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
 
 const advertsData = new Array(10).fill(null).map(() => {
     return createAdvertData();
 });

 export {advertsData};