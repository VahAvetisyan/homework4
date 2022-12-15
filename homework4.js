//1. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function largestProduct(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i] * arr[i + 1])
    }
    return Math.max(...newArr)
}




//2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
//minimum and maximum elements to make integers sequence.

function missedNumbers(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let missedNums = 0;

    for (let i = minNum + 1; i < maxNum; i++) {
        if (arr.indexOf(i) === -1) {
            missedNums++
        }
    }
    return missedNums;
}



//3. Implement built in array sort method using bubble sort algorithm.

Array.prototype.mySort = function (arr) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let element = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = element;
                swapped = true;
            }
        }
    }
    return arr;
}


let arr = ['100', '4', '8', '10', '100'];
arr.mySort(arr)
console.log(arr);

//4. Insert a n positive number. Print the n-st prime number.

let n = 6;

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumber(n) {
    let arr = [];
    let number = 1;

    while (arr.length !== n) {
        if (isPrime(number)) {
            arr.push(number)
        }
        number++
    }
    return arr[arr.length - 1]
}

console.log(getPrimeNumber(n))
