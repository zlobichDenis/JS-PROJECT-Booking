const getRandomParseIntNumber  = (firstNumber, endNumber) => {
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
};

export {getRandomParseIntNumber, getRandomFloatNumber, getRandomArray};