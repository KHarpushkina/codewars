function isValidIP(str) {
  const ipParts = str.split(".");
  const checkNotNumbersMask = /[^\d]/;
  if (ipParts.length !== 4) {
    return false;
  }

  for (let i = 0; i < ipParts.length; i++) {
    const ipPart = ipParts[i];
    if (checkNotNumbersMask.test(ipPart) || !ipPart) {
      return false;
    }
    if (ipPart.length > 1 && ipPart[0] === "0"){
      return false;
    }
    if (+ipPart < 0 || +ipPart > 255) {
      return false;
    }
  }

  return true;
}

console.log(isValidIP("0.0.0.0"))
console.log(isValidIP("12.255.56.1"))
console.log(isValidIP("137.255.156.100"))

console.log(isValidIP(''));
console.log(isValidIP('abc.def.ghi.jkl'));
console.log(isValidIP('123.456.789.0'));
console.log(isValidIP('12.34.56'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('256.1.2.3'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('123,45,67,89'));
console.log(isValidIP('1e0.1e1.1e2.2e2'));
console.log(isValidIP(' 1.2.3.4'));
console.log(isValidIP('1.2.3.4 '));
console.log(isValidIP('12.34.56.-7'));
console.log(isValidIP('1.2.3.4\n'));
console.log(isValidIP('\n1.2.3.4'));