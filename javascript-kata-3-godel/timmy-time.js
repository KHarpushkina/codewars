function changeTime(input, delta) {
  var inputTime = input.split(":").map(value => Number(value));
  var outputTime = [inputTime[0], inputTime[1] + delta];
  if (outputTime[1] === 60) {
    outputTime[0] = inputTime[0] + 1;
    outputTime[1] = 0;
  }
  if (outputTime[1] === -1) {
    outputTime[0] = inputTime[0] - 1;
    outputTime[1] = 59;
  }
  if (outputTime[0] === 24) {
    outputTime[0] = 0;
  }
  if (outputTime[0] === -1) {
    outputTime[0] = 23;
  }
  return outputTime.map(value => (value + "").length === 1 ? "0" + value : value + "").join(":");
}


console.log(changeTime('10:00', 1)); //return '10:01'
console.log(changeTime('10:00', -1)); //return '09:59'
console.log(changeTime('23:59', 1) );//return '00:00'
console.log(changeTime('00:00', -1)); //return '23:59'
