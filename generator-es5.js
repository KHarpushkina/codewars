/*https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript */

function generator(sequencer) {    
    function generatorClass(params) {
        this.genValue = 0;

        this.next = function() {
            let cutParams = [];
            for (let i = 1; i < params.length; i++) {
                cutParams.push(params[i]);
            }
            let result = sequencer(this.genValue, ...cutParams);
            this.genValue += 1;
            return result;
        }
    }
    return new generatorClass(arguments);
}

function dummySeq() {
	return "dummy";
}

function factorialSeq(value) {
    let n = value;
    let result = 1;
    if (!value || value === 1) {
        return 1;
    }
    while (n) {
        result *= n;
        n -= 1;
    }
    return result;
}

function fibonacciSeq(value) {
    let n = value, previousValue = 1, currentValue = 1;
    if (!n || n === 1) {
        return 1;
    }
    n -= 1;
    while (n) {
        n -= 1;
        let valueToAdd = previousValue;
        previousValue = currentValue;
        currentValue = valueToAdd + currentValue;
    }

    return currentValue;
}

function rangeSeq(value, start, step) {
    let result = start;
    for (let i = 0; i < value; i++) {
        result += step;        
    }
    return result;
}

function primeSeq(value) {
    let number = 2, count = 0;
    let result = number;
    while (count !== value) {
        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && number !== 2) {
            result = number;
            count += 1;
        }
        number += 1;
    }
    return result;
}

function partialSumSeq() {
    let count = arguments[0];
    let result = arguments[1];
    let i = 2;
    if (count >= arguments.length - 1) {
        throw Error ("End of sequence error expected");
    }
    while (count) {
        result += arguments[i];
        i++;
        count--;
    }
    return result;
}

let genDummySeq = generator(partialSumSeq, -1, 4, 2, 5);
console.log(genDummySeq.next())
console.log(genDummySeq.next())
console.log(genDummySeq.next())
console.log(genDummySeq.next())
console.log(genDummySeq.next())
console.log(genDummySeq.next())