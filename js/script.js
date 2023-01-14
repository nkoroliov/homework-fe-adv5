function getIntNumber(numbers){
    return numbers.filter(function(item){
         return Number.isInteger(item);
    });
 }
 
 // 1

function getRandomArray(length, min, max) {
    let numbersArr = [];
    let number;
    for (let i = 0; i < length; i++) {
        number = (Math.floor(Math.random() * (max - min + 1) + min));
        numbersArr.push(Number(number));
    }
    return numbersArr;
}

console.log('1. getRandomArray(15,1,100)',getRandomArray(15,1,100));

// 3

function getAverage(...numbers) {
    let filterNumber = getIntNumber(numbers);
    let averageValue = filterNumber.reduce((prevValue, nextValue) => {
        return prevValue + nextValue
    }, 0);
    return averageValue / numbers.length;
}

console.log('3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4

function getMedian(...numbers) {
    let filterNumber = getIntNumber(numbers);
    let sortedNubers = filterNumber.sort(function(a, b){return a - b});
    let medianIndex = Math.floor(sortedNubers.length / 2);
    if (sortedNubers.length % 2 === 0) {
         return (filterNumber[medianIndex] + filterNumber[medianIndex - 1]) / 2;
    } else {
        return filterNumber[medianIndex]
    }
}

console.log('4. getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5 

const filterEvenNumbers = (...numbers) => {
    let filterNumber = getIntNumber(numbers);
    return  filterNumber.filter(n => n % 2 !== 0);
};

console.log('5. filterEvenNumbers(1, 2, 3, 4, 5, 6) - ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6 

const countPositiveNumbers = (...numbers) => {
    let filterNumber = getIntNumber(numbers);
    return filterNumber.reduce((acc, curr) => (curr > 0) ? acc += 1 : acc, 0);
};

console.log('6. countPositiveNumbers(1, -2, 3, -4, true, -5, 6) - ', countPositiveNumbers(1, -2, 3, -4, true, -5, 6));

// 7

const getDividedByFive = (...numbers) => {
    let filterNumber = getIntNumber(numbers);
    return filterNumber.filter(el => !(el % 5));
};

console.log('7. getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));