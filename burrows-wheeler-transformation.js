/*https://www.codewars.com/kata/54ce4c6804fcc440a1000ecb/train/javascript */

function encode(input) {
    let shiftMatrix = [];
    let shiftString = input.split("");
    let encodeIndex = 0;
    let encodeString = "";
    for (let i = 0; i < input.length; i++) {
        shiftMatrix.push([].concat(shiftString));
        let deletedLetter = shiftString.splice(input.length - 1, 1);
        shiftString.unshift(...deletedLetter);
    }
    shiftMatrix.sort((string1, string2) => {
        if (string1.join("") > string2.join("")) return 1;
        if (string1.join("") == string2.join("")) return 0;
        if (string1.join("") < string2.join("")) return -1;
    });
    for (let i = 0; i < shiftMatrix.length; i++) {
        encodeString += shiftMatrix[i][input.length - 1];
        if (shiftMatrix[i].join("") === input) {
            encodeIndex = i;
        }
    }
    return [encodeString, encodeIndex];
}

function decode(encodeString, encodeIndex) {
    let shiftMatrix = [];
    let encodeArray = encodeString.split("");
    let encodeArraySorted = [].concat(encodeArray);
    encodeArraySorted.sort();
    for (let i = 0; i < encodeString.length; i++) {
        let stringArray = [];
        stringArray.push(encodeArraySorted[i]);
        for (let j = 1; j < encodeString.length - 1; j++) {
            stringArray.push("");
        }
        stringArray.push(encodeArray[i]);
        shiftMatrix.push(stringArray);
    }
    console.log(shiftMatrix)
}

console.log(encode("bananabar"))
console.log(decode("nnbbraaaa", 4))