const dictionary = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const RomanNumerals = {
  romanValues: Object.keys(dictionary),
  arabicValues: Object.values(dictionary),

  toRoman: function (input) {
    let num = input;
    let result = "";

    for (let i = this.arabicValues.length; i > -1; i--) {
      while (num >= this.arabicValues[i]) {
        num -= this.arabicValues[i];
        result += this.romanValues[i];
      }
    }

    return result;
  },

  fromRoman: function (input) {
    let sortedRomanValues = [...this.romanValues].sort((element1, element2) => element1.length - element2.length);
    let str = input;
    let result = 0;

    for (let i = sortedRomanValues.length; i > -1; i--) {
      while (str.indexOf(sortedRomanValues[i]) > -1) {
        str = str.replace(sortedRomanValues[i], '');
        result += dictionary[sortedRomanValues[i]];
      }
    }

    return result;
  },
};

console.log(RomanNumerals.fromRoman('MDCLXIX'));
