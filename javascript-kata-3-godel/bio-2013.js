function timeAtSync(first, second) {
  let date1 = new Date(2020, 0, 1, 0, 0, 0, 0);
  let date2 = new Date(2020, 0, 1, 0, 0, 0, 0);

  let date1Milliseconds = date1.getTime();
  let date2Milliseconds = date2.getTime();

  do {
    date1Milliseconds = date1Milliseconds + 1000 * 60 * 60 + first * 60 * 1000;
    date2Milliseconds = date2Milliseconds + 1000 * 60 * 60 + second * 60 * 1000;
    date1 = new Date(date1Milliseconds);
    date2 = new Date(date2Milliseconds);
  } while (date1.getHours() !== date2.getHours() || date1.getMinutes() !== date2.getMinutes());

  const resultDate = new Date(date1Milliseconds);
  const resultHours = (resultDate.getHours() < 10) ? "0" + resultDate.getHours() : resultDate.getHours();
  const resultMinutes = (resultDate.getMinutes() < 10) ? "0" + resultDate.getMinutes() : resultDate.getMinutes();
  return `${resultHours}:${resultMinutes}`;
}

console.log(timeAtSync(1, 31));
