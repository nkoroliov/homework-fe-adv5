 // 1

 const getRandomArray = (length, min, max)=>{
	let randArr = [];
	for (let i=0; i<length; i++){
		randArr.push(Math.floor(Math.random() * (max - min + 1) + min))
	}
	return randArr;
}

console.log('1. getRandomArray(15,1,100)',getRandomArray(15,1,100));

// 3

function getAverage(...numbers) {
    let averageValue = numbers.reduce((prevValue, nextValue) => {
        return prevValue + nextValue
    }, 0);
    return averageValue / numbers.length;
}

console.log('3. getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4

function getMedian(...numbers) {
    let median = 0;
    let propIndex = 0;
    const sortedNubers = Math.trunc(numbers.sort((a, b) => a - b));
if (numbers.length % 2 !== 0) {
    propIndex = Math.trunc(numbers.length / 2);
    median = numbers[propIndex];
} else {
    propIndex = numbers.length / 2;
    median = (numbers[propIndex - 1] + numbers[propIndex]) / 2;
    };
    return median
};

console.log('4. getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5 

const filterEvenNumbers = (...numbers) => {
    return  numbers.filter(n => n % 2 !== 0);
};

console.log('5. filterEvenNumbers(1, 2, 3, 4, 5, 6) - ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6 

const countPositiveNumbers = (...numbers) => {
    let filterNumber = numbers.filter(item => Number.isInteger(item));
    return filterNumber.reduce((acc, curr) => (curr > 0) ? acc += 1 : acc, 0);
};

console.log('6. countPositiveNumbers(1, -2, 3, -4, true, -5, 6) - ', countPositiveNumbers(1, -2, 3, -4, true, -5, 6));

// 7

const getDividedByFive = (...numbers) => {
    return numbers.filter(el => !(el % 5));
};

console.log('7. getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) - ', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));