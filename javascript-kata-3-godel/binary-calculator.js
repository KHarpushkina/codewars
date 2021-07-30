function calculate(n1, n2, o) {
  let number1 =
    n1.indexOf("-") === -1 ? parseInt(n1, 2) : -parseInt(n1.slice(1), 2);
  let number2 =
    n2.indexOf("-") === -1 ? parseInt(n2, 2) : -parseInt(n2.slice(1), 2);
  let result = 0;

  switch (o) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    default:
      break;
  }

  return result < 0 ? ("-" + ((0 - result).toString(2))) : result.toString(2);
}
