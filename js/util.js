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

const debounce = (fn, wait) => {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), wait);
    }
  };

export {debounce, getRandomParseIntNumber, getRandomFloatNumber, getRandomArray};