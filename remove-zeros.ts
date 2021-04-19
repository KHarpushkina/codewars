function removeZeros(array) {
	for (let i = 0; i < array.length; i++) {
            let n = i, count = 0;
            while (array[n] === 0 || array[n] === "0") {
                n++;
                count++;
            }
			let element = array[i];
			for (let j = i; j < array.length; j++) {
				array[j] = array[j + 1];
			}
            array[array.length - 1] = element;
            i--;
		}
	}
	return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))