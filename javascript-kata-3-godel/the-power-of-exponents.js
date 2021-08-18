function power(base, exponent) {
  let result = 1;
  let numberToMultiply = base;
  let numberOfMultiply = exponent;

  if (exponent < 0) {
    numberToMultiply = 1 / base;
    numberOfMultiply = 0 - exponent;
  }

  for (let i = 0; i < numberOfMultiply; i++) {
    result *= numberToMultiply;
  }

  return result;
}

console.log(power(4, -3));
